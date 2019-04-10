const fs = require('fs');

const rs = fs.createReadStream('../../1_streams.md');
const ws = fs.createWriteStream('stream-pipe-copy.md');

rs.pipe(ws);


