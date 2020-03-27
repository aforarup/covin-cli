const chalk = require('chalk');
const green = chalk.green;
const red = chalk.red;
const yellow = chalk.yellow;
const dim = chalk.dim;

module.exports = {
	head: [
		`#`,
		`State`,
		`Cases`,
		`Cases ${dim(`(today)`)}`,
		`${red(`Deaths`)}`,
		`${red(`Deaths (today)`)}`,
		`${green(`Recovered`)}`,
		`${yellow(`Active`)}`
	],
	headTests: [
		`#`,
		`Updated Till`,
		`Samples Tested`,
		`Individual Tested`,
		`${red(`Positive Cases`)}`
	],
	headDistricts: [
		`#`,
		`District`,
		`Confirmed Cases`
	],
	style: { head: ['cyan'] },
	borderless: {
		top: '',
		'top-mid': '',
		'top-left': '',
		'top-right': '',
		bottom: '',
		'bottom-mid': '',
		'bottom-left': '',
		'bottom-right': '',
		left: '',
		'left-mid': '',
		mid: '',
		'mid-mid': '',
		right: '',
		'right-mid': '',
		middle: ' '
	},
	sortingKeys: {
		country: 'country',
		cases: 'confirmed',
		'cases-today': 'todayCases',
		deaths: 'deaths',
		'deaths-today': 'todayDeaths',
		recovered: 'recovered',
		active: 'active',
		critical: 'critical',
		'per-million': 'casesPerOneMillion'
	},
	sortingStateKeys: {
		state: 'state',
		cases: 'cases',
		'cases-today': 'todayCases',
		deaths: 'deaths',
		'deaths-today': 'todayDeaths',
		active: 'active'
	}
};
