const sym = require('log-symbols');
const chalk = require('chalk');
const cyan = chalk.cyan;
const dim = chalk.dim;
const getWorldwide = require('./getWorldwide.js');

module.exports = async () => {
	// await getWorldwide()
	console.log(
		`\n${sym.success} ${dim(
			`Star the repo for updates → https://github.com/aforarup/covid-cli`
		)}\n${sym.info} ${dim(
			`Use corona-cli by Awais.dev for worldwide corona tracking\n\n`
		)}`
	);
};
