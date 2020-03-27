#!/usr/bin/env node

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
	handleError(`UNHANDLED ERROR`, err);
});

const ora = require('ora');
const spinner = ora({ text: '' });
const Table = require('cli-table3');
const cli = require('./utils/cli.js');
const init = require('./utils/init.js');
const theEnd = require('./utils/theEnd.js');
const handleError = require('cli-handle-error');
const getTests = require('./utils/getTests.js');
const getState = require('./utils/getState.js');
const getStates = require('./utils/getStates.js');
const {
	style,
	head,
	headTests,
	borderless
} = require('./utils/table.js');
const xcolor = cli.flags.xcolor;
const sortBy = cli.flags.sort;
const reverse = cli.flags.reverse;
const limit = Math.abs(cli.flags.limit);
const minimal = cli.flags.minimal;
const options = { sortBy, limit, reverse, minimal };

(async () => {
	// Init.
	init(minimal);
	const [input] = cli.input;
	input === 'help' && (await cli.showHelp(0));
	const tests = input === 'tests' ? true : false;
	const state = input;

	// Table
	const border = minimal ? borderless : {};
	const table = !tests
		? new Table({ head, style, chars: border })
		: new Table({ head: headTests, style, chars: border });

	// Display data.
	spinner.start();
	const allStatesData = await getStates(spinner, table, tests, state, options);
	await getState(spinner, table, tests, state, allStatesData);
	await getTests(spinner, table, tests, options);
	theEnd();
})();
