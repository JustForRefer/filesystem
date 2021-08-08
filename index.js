// import { readFileSync } from 'fs';

// readFileSync()

// Synchronus Way
const fs = require('fs');

const textInput = fs.readFileSync('./input.txt','utf-8');
console.log(textInput);

const textOutput = 'Bie bie';

fs.writeFileSync('./output.txt',textOutput);

// Asynchronus Way
fs.readFile('./start.txt','utf-8' ,(err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log ("I still haven't read file!");