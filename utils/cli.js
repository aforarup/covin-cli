const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;

module.exports = meow(
	`
	Usage
	  ${green(`covid`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

	Commands
	  ${cyan(`state-name`)}         Get data for a given state
	  ${cyan(`tests`)}              Get data for Tests conducted across the country

	Options
	  ${yellow(`--limit`)}, ${yellow(`-l`)}          Print only N entries

	Examples
	  ${green(`covid`)} ${cyan(`delhi`)}
	  ${green(`covid`)} ${cyan(`tests`)}

`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false,
		flags: {
			limit: {
				type: 'number',
				default: Number.MAX_SAFE_INTEGER,
				alias: 'l'
			},
			minimal: {
				type: 'boolean',
				defualt: false,
				alias: 'm'
			}
		}
	}
);
