const fs = require('fs');

const rs = fs.createReadStream('../../1_streams.md', {
    encoding: 'utf8',
    highWaterMark: 1
});

const ws = fs.createWriteStream('copy-1_streams.md');

rs.on('data', data => {
    ws.write(data);
});

rs.on('end', () => {
    ws.end();
    console.log('complete');
});
