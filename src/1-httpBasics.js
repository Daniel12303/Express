
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('user hit the server'); // When the port 5000 is opened, this will run
    res.end('Hello'); // all the response headers and body has been sent, and it is now complete
})

server.listen(5000) // 5000 is the port that is being listened for