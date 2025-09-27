const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public')) // all static files will be used and it works immediately
// The common name for the static assets are public or static

// Static assets are files that the server does not need to change

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './UkeleleTab/index.html')) // __dirname is the absolute path, you can also use path.join
})

app.all('/*splat', (req, res) => {
    res.status(404).send('Cannot get Resource')
})

app.listen(5000, () => {
    console.log('Running at port 5000...')
})
