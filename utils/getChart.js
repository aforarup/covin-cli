const asciichart = require ('asciichart');
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
const Table = require('cli-table3')
const {
	style
} = require('./table.js');

module.exports = async (spinner, chart, { sortBy, limit, reverse }) => {
    if (chart) {
		const [err, response] = await to(
			axios.get(`https://api.covid19india.org/data.json`)
		);
		handleError(`API is down, try again later.`, err, false)
        let timeSeries = response.data.cases_time_series
        timeSeries = timeSeries.slice(-1*limit) 

        spinner.stopAndPersist();
        console.log(chalk.cyan(`DAILY CONFIRMED CASES`))
        console.log(asciichart.plot (timeSeries.map(x => x[`dailyconfirmed`]), {height: 12}))
        console.log()
        console.log(chalk.cyan(`TOTAL CONFIRMED CASES`))
        console.log(asciichart.plot (timeSeries.map(x => x[`totalconfirmed`]), {height: 12}))
        console.log()
        console.log(chalk.red(`TOTAL DEATHS`))
        console.log(asciichart.plot (timeSeries.map(x => x[`totaldeceased`]), {height: 6}))
    }
};