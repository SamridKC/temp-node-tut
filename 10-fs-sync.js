const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Hello, Here is the result ${first}, ${second}`); // Does not append, overwrites the file

writeFileSync('./content/result-sync.txt', `Hello, Here is the result ${first}, ${second}`, {flag: 'a'}); // Appends to the file

console.log('done with the task')
console.log('starting the next one')