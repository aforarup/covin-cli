const sym = require('figures');;
const chalk = require('chalk');
const cyan = chalk.cyan;
const dim = chalk.dim;

module.exports = async () => {
	console.log(
		`\n${sym.tick} ${dim(
			`Star the repo for updates → https://github.com/aforarup/covin-cli`
		)}\n${sym.heart} ${dim(
			`Follow @aforarup for more awesome stuffs `
		)}\n${sym.info} ${dim(
			`Use corona-cli by Awais.dev for worldwide corona tracking\n`
		)}`
	);
};
