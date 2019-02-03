const { COMMANDS } = require("./common/constants");

const handler = (readLineHelper, line) => {

	const [ command, value ] = line.trim().toLowerCase().split(" ");

	switch(command) {
		case COMMANDS.HELP:
			readLineHelper.prompt();
			break;

		case COMMANDS.QUIT:
		case COMMANDS.EXIT:
			readLineHelper.emit("close");
			break;
		default:
			readLineHelper.prompt();
			break;
	}
};

module.exports = handler;
