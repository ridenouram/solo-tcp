const net = require('net');

const server = net.createServer(client => {
    console.log('client connected!');
    // client.pipe(client);
    client.on('data', data => {
        console.log(data);
        client.write(`ECHO FROM SERVER: ${data}`);
    });
});

server.listen(7890);  //you set this number - has to be greater than 1050 and under like 60000
