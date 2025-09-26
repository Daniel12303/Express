const http = require('http')
const { readFileSync, read } = require('fs');

//get all filies

const homePage = readFileSync('./egg/index.html') // Synchronous, because it is needed to run before the server runs, and it only runs once
const homeStyles = readFileSync('./egg/style.css')
const homeImage = readFileSync('./egg/index.js')

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end();
    }
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }
})

server.listen(5000) 