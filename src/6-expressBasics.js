
const express = require('express');
const app = express() // We are getting a server from express and a server

//app.get Reads data

app.get('/', (req, res) => { // The path that the user is accessing, then the callback function is invoked everytime the user performs a get request
    console.log('The user hit the resource');

    res.status(200).send('Home Page') // You can pass in Strings, Html, etc | Similar to res.write() 
    //The status(200) says that it was a success

}) // This listens whenever the user is "getting" or accessing the home page

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

//app.all Works for all Http methods and for 404 

app.get('/*splat', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>') // status(404) sends the error status
});

//app.listen

app.listen(5000, () => { // When this server is ran, do this function
    console.log('server is listening on port 5000');
})


//app.post Inserts Data



//app.put Updates Data


//app.delete Delete data

//app.use For setting up middleware