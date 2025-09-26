
const http = require('http')
const { readFileSync } = require('fs');

//get all filies

const homePage = readFileSync('./index.html') // Synchronous, because it is needed to run before the server runs, and it only runs once

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    // res.writeHead(200, { 'content-type': 'text/plain' }) if you use text/plain, it will print the plain text of the file
    res.write(homePage)

    res.end();
})

server.listen(5000) 