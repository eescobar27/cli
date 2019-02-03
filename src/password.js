const parseArgs = require("minimist");
const readline = require("readline");

const argv = parseArgs(process.argv.slice(2));
//console.log(argv);

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// 	prompt: "yomero> ",
// 	completer: function completer(line) {
// 		const completions = '.help .error .exit .quit .q'.split(' ');
// 		const hits = completions.filter((c) => c.startsWith(line));
// 		// show all completions if none found
// 		return [hits.length ? hits : completions, line];
// 	}
// });

// rl.prompt();

// rl.on("line", (line) => {
	
// 	switch (line.trim()) {
// 	case "hello":
// 		console.log("world!");
// 		break;
// 	default:
// 		//console.log(`Say what? I might have heard "${line.trim()}"`);
// 		break;
// 	}

// 	if(line.trim() === "exit") {
// 		rl.emit("close");
// 	}
// 	else if(line.trim() === "clean"){
// 		//readline.clearLine();
// 		//readline.write("hey")
// 		rl.write('Delete this!');
		
// 		rl.write(null, { ctrl: true, name: 'u' });
// 		rl.write("something")
// 		//rl.prompt();
// 	}
// 	else {
// 		rl.prompt();
// 	}

// }).on("close", () => {
// 	console.log("bye!");
// 	process.exit(0);
// });


function getPassword(prompt, callback) {
    if (callback === undefined) {
        callback = prompt;
        prompt = undefined;
    }
    if (prompt === undefined) {
        prompt = 'Password: ';
    }
    if (prompt) {
        process.stdout.write(prompt);
    }

    var stdin = process.stdin;
    stdin.resume();
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    var password = '';
    stdin.on('data', function (ch) {
        ch = ch + "";

        switch (ch) {
        case "\n":
        case "\r":
        case "\u0004":
            // They've finished typing their password
            process.stdout.write('\n');
            stdin.setRawMode(false);
            stdin.pause();
            callback(false, password);
            break;
        case "\u0003":
            // Ctrl-C
            callback(true);
            break;
        default:
            // More passsword characters
           // process.stdout.write('*');
            password += ch;
            break;
        }
    });
}

getPassword("password:", (isDone, password) => {
	console.log("print result->" + password)
})