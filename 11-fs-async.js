const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
    const second = result;
    writeFile('./content/result-async.txt', `Hello, Here is the result for async: ${first}, ${second}`, {flag: 'a'},
    (err,result) => {
        if(err) {
            console.log(err)
            return
        }
        console.log('done with the task');
        });
    })
}) 
console.log('starting the next one')


// CALLBACK HELL

