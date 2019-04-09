const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
    encoding: 'utf8',   //add this to get the text from the file instead of just a buffer
    highWaterMark: 1  //each chunk is a letter (default is 64*28)
});

//the data event
let body = '';
rs.on('data', chunk => {
    body += chunk;
});

rs.on('end', () => {
    console.log(body);
});

