const axios = require('axios');
const chalk = require('chalk');
const cyan = chalk.cyan;
const yellow = chalk.yellow;
const red = chalk.red;
const green = chalk.green;
const dim = chalk.dim;
const comma = require('comma-number');
const { sortingKeys } = require('./table.js');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const orderBy = require('lodash.orderby');


module.exports = async (
	spinner,
	table,
	tests,
	stateName,
	{ sortBy, limit, reverse }
) => {
	if (!tests) {
		const [err, response] = await to(
			axios.get(`https://api.covid19india.org/data.json`)
		);
		handleError(`API is down, try again later.`, err, false);
		let allStates = response.data.statewise;
		if(!stateName) {



			let countrystats = allStates[0]

			// Limit.
			allStates = allStates.slice(1, limit);

			
			// Push selected data.
			allStates.map((oneState, count) => {
				table.push([
					count + 1,
					oneState.state,
					comma(oneState.confirmed),
					comma(oneState.delta.confirmed),
					comma(oneState.deaths),
					comma(oneState.delta.deaths),
					comma(oneState.recovered),
					comma(oneState.active)
				]);
			});


			// Push country overall data.
			table.push([
				cyan('-'),
				cyan(countrystats.state),
					cyan(comma(countrystats.confirmed)),
					cyan(comma(countrystats.delta.confirmed)),
					red(comma(countrystats.deaths)),
					red(comma(countrystats.delta.deaths)),
					green(comma(countrystats.recovered)),
					yellow(comma(countrystats.active))
			]);

			

			spinner.stopAndPersist();
			console.log(table.toString());
		}
		return allStates;
	}
};
