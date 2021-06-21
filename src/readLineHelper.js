"use strict";

const readline = require("readline");
const handler = require("./handler");
const { getKeyValues } = require("./common/utilities");
const { COMMANDS } = require("./common/constants");

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

module.exports = getReadLineHelper;
