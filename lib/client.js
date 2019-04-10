const net = require('net');
const readline = require('readline'); //gives us a command line tool for listening to what's typed in the command line and outputing 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();
rl.on('line', line => {
    client.write(line);
    rl.prompt();
});

client.on('data', data => {
    console.log(`\n${data.toString()}`);
    rl.prompt();
});

const client = net.createConnection(7890, '192.168.1.171', () => {
    console.log('I am connected');
    client.write('hello i am a client');
});
