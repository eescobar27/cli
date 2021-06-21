"use strict";

const { COMMANDS } = require("./common/constants");

const handler = (readLineHelper, line) => {

	const [ command, value ] = line.trim().toLowerCase().split(" ");

	switch(command) {
		case COMMANDS.CLEAR:
			readLineHelper.clearLine();
			readLineHelper.prompt();
		case COMMANDS.HELP:
			readLineHelper.prompt();
			break;
		case COMMANDS.QUIT:
		case COMMANDS.EXIT:
			readLineHelper.emit("close");
			break;
		default:
			console.log(`Say what? I might have heard "${line.trim()}"`);
			readLineHelper.prompt();
			break;
	}
};

module.exports = handler;
