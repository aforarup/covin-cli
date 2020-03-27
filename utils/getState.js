const chalk = require('chalk');
const axios = require('axios');
const sym = require('log-symbols');
const comma = require('comma-number');
const yellow = chalk.yellow;
const red = chalk.red;
const green = chalk.green;
const cyan = chalk.cyan;
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const Table = require('cli-table3');
const {
	style,
	borderless,
	headDistricts
} = require('./table.js');

module.exports = async (spinner, table, tests, passesState, allStatesData) => {
	if (passesState && !tests) {
		const thisState = allStatesData.filter(state => state.state.split(" ")[0].toLowerCase() === passesState.split(" ")[0].toLowerCase())[0]
		if(thisState == undefined) {
			spinner.stopAndPersist();
			console.log(
				`${red(
					`${sym.error} Nops. A state named "${passesState}" does not exist…`
				)}\n`
			);
			process.exit(0);
		}


		const [err, response] = await to(
			axios.get(`https://api.covid19india.org/state_district_wise.json`)
		);
		handleError(`API is down, try again later.`, err, false);

		table.push([
			cyan('-'),
			cyan(thisState.state),
				cyan(comma(thisState.confirmed)),
				cyan(comma(thisState.delta.confirmed)),
				red(comma(thisState.deaths)),
				red(comma(thisState.delta.deaths)),
				green(comma(thisState.recovered)),
				yellow(comma(thisState.active))
		]);

		const districtTable = new Table({head:headDistricts, style, chars: {} })

		const stateWiseDistricts = response.data;

		spinner.stopAndPersist();
		console.log(table.toString());

		if(stateWiseDistricts[thisState.state]) {
			const thisStatesDistrict = stateWiseDistricts[thisState.state]["districtData"];
		
			let count = 0
			Object.keys(thisStatesDistrict).forEach(key => {
				count += 1
				var value = thisStatesDistrict[key];
				districtTable.push([
					count,
					yellow(comma(key)),
					cyan(comma(value.confirmed))
				]);
			})
	
			
			console.log(districtTable.toString());
		}
		
	}
};
