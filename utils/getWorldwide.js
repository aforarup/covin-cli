const axios = require('axios');
const comma = require('comma-number');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const chalk = require('chalk');
const cyan = chalk.cyan;
const yellow = chalk.yellow;
const red = chalk.red;
const green = chalk.green;
const dim = chalk.dim;
const Table = require('cli-table3');
const {
	style
} = require('./table.js');

module.exports = async () => {
	const [err, response] = await to(axios.get(`https://corona.lmao.ninja/all`));
	if (!err && response.data) {
		let data = response.data

		const table = new Table({style, chars: {} })
		table.push([
			cyan(`Worldwide`),
			cyan(`${data.cases} ${dim(`(cases)`)}`),
			red(`${data.deaths} ${dim(`(deaths)`)}`),
			green(`${data.recovered} ${dim(`(recovered)`)}`),
			yellow(`${data.active} ${dim(`(active)`)}`)
		]);
		console.log(table.toString())
	}
	
	
};
