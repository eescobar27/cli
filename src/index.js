#! /usr/bin/env node

const parseArgs = require("minimist");
const package = require("../package");
const getReadLineHelper = require("./readLineHelper");

const argv = parseArgs(process.argv.slice(2));

(async () => {
	if(argv && argv.v === true) {
		console.log(`v${package.version}`);
	}
	else {
		const readLineHelper = getReadLineHelper();
		readLineHelper.prompt();
	}
})();
