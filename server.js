// Setting up basic server
const express = require('express') // express package
const app = express() // executing
const port = 4000 // port
const bodyParser = require('body-parser'); // body parser

// parse application
app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json
app.use(bodyParser.json())


// listens at port 4000 for the get method coming in
// '/' - the root/end point or URL
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

// Example
app.get('/whatever', (req, res) => {
    res.send('Hello from whatever');
})

// Passing in a parameter
app.get('/hello/:name', (req, res) => {
    // Pulling out the parameter, 'name'
    res.send('Hello ' + req.params.name);
})

app.get('/api/movies', (req, res) => {
    // Constant 'movies' array with two objects
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    // Sending back json data
    res.json({
        // name of array 'mymovies' passed down can be anything
        mymovies: movies,
        message: 'Data sent successfully'
    })
})

// Sending a file
// __dirname returns current directory
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Pulling from url
app.get('/name', (req, res)=>{
    console.log(req.query)
    res.send("Hello " + req.query.firstname + " " + req.query.lastname);
})

// Post request - same url but different HTTP method
// Data not sent in the url
app.post('/name', (req, res)=>{
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})

// Configuration for getting server set up
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})