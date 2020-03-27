const axios = require('axios');
const chalk = require('chalk');
const cyan = chalk.cyan;
const dim = chalk.dim;
const comma = require('comma-number');
const { sortingStateKeys } = require('./table.js');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const orderBy = require('lodash.orderby');

module.exports = async (spinner, table, states, { sortBy, limit, reverse }) => {
	if (states) {
		const [err, response] = await to(
			axios.get(`https://api.covid19india.org/data.json`)
		);
		handleError(`API is down, try again later.`, err, false);
		let allStates = response.data.tested;

		// Limit.
		allStates = allStates.slice(0, limit);
		allStates.reverse();
		// Push selected data.
		allStates.map((oneState, count) => {
			if(oneState.totalsamplestested) {
				table.push([
					count + 1,
					oneState.updatetimestamp,
					comma(oneState.totalsamplestested),
					comma(oneState.totalindividualstested),
					comma(oneState.totalpositivecases)
					
				]);
			}
		});

		spinner.stopAndPersist();
		const isRev = reverse ? `${dim(` & `)}${cyan(`Order`)}: reversed` : ``;
		spinner.info(`${cyan(`Sorted by:`)} ${sortBy}${isRev}`);
		console.log(table.toString());
	}
};
