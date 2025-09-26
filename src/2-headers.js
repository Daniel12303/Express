
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' }) // Writes headers, or adds meta data
    // Refers to what you are sending back
    //200 is the status code for Success
    //content-type : text/html is the header

    res.end(); // all the response headers and body has been sent, and it is now complete
})

server.listen(5000) // 5000 is the port that is being listened for