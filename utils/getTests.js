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
		let allTests = response.data.tested;

		// Limit.
		allTests = allTests.slice(0, limit);
		allTests.reverse();
		// Push selected data.
		allTests.map((oneTest, count) => {
			if(oneTest.totalsamplestested) {
				table.push([
					count + 1,
					oneTest.updatetimestamp,
					comma(oneTest.totalsamplestested),
					comma(oneTest.totalindividualstested),
					comma(oneTest.totalpositivecases)
					
				]);
			}
		});

		spinner.stopAndPersist();
		const isRev = reverse ? `${dim(` & `)}${cyan(`Order`)}: reversed` : ``;
		console.log(table.toString());
	}
};
