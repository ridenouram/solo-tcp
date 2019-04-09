const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
    flags: 'a'  //makes it so that appends to file vs rewriting file
});

const spot = {
    age: 15,
    breed: 'dalmation',
};

const rover = {
    age: 10,
    breed: 'great dane'
};

const spotString = JSON.stringify(spot, null, 2);
const roverString = JSON.stringify(rover, null, 2);

ws.write(spotString);    //has to receive a string or a buffer
fs.appendFile('spot.json', `\n${roverString}`, err => {
    if(err) throw err;
});

//Ryan
//manually write JSON 
ws.write('{');
ws.write('\n\t');
ws.write('"name": "spot"');



ws.end();
