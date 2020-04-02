const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;

module.exports = meow(
	`
	Usage
	  ${green(`covin`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

	Commands
	  ${cyan(`state-name`)}         Get data for a given state
	  ${cyan(`graph`)}              Checker whether we are "flattening the curve"
	  ${cyan(`tests`)}              Get data for Tests conducted across the country

	Options
	  ${yellow(`--limit`)}, ${yellow(`-l`)}          Print only N entries.
	  ${yellow(`--limit`)}, ${yellow(`-l`)}          Draw graph for last N days.

	Examples
	  ${green(`covin`)}
	  ${green(`covin`)} ${yellow(`-l`)} ${cyan(`20`)} 
	  ${green(`covin`)} ${cyan(`karnataka`)}
	  ${green(`covin`)} ${cyan(`graph`)}
	  ${green(`covin`)} ${cyan(`graph`)} ${yellow(`-l`)} ${cyan(`50`)} 
	  ${green(`covin`)} ${cyan(`tests`)}

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
