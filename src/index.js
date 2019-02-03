#! /usr/bin/env node

const parseArgs = require("minimist");
const readline = require("readline");
const package = require("../package");
const handler = require("./handler");
const { getKeyValues } = require("./common/utilities");
const { COMMANDS } = require("./common/constants");

const argv = parseArgs(process.argv.slice(2));
const COMMAND_OPTIONS = getKeyValues(COMMANDS);

const getReadLineHelper = () => {
	const readLineHelper = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: "> ",
		completer: (line) => {
			const hits = COMMAND_OPTIONS.filter((c) => c.startsWith(line));
			// show all completions if none found
			return [ hits.length ? hits : COMMAND_OPTIONS, line];
		}
	});

	readLineHelper.on("line", (line) => {
		handler(readLineHelper, line);
	}).on("close", () => {
		console.log("bye!");
		process.exit(0);
	});

	return readLineHelper;
};

(async () => {

	if(argv && argv.v === true) {
		console.log(`v${package.version}`);
	}
	else {
		const readLineHelper = getReadLineHelper();
		readLineHelper.prompt();
	}
})();
