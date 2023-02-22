const http = require('http');

const server = http.createServer((req,res)=> {   // req => incoming request, res what we are are sending back
    if (req.url === '/') {
        res.write('Welcome to our ghar page')
    }
    if (req.url === '/about') {
        res.write('Sup')
    }
    res.write(`OOPS`)
    res.end()
})

server.listen(3000)