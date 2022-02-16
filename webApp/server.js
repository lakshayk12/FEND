/* Empty JS object to act as endpoint for all routes */
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors'); // -> so that browser and server can talk to eachother without any security intereptions

/* Initializing the main project folder */
app.use(express.static('website')); // pointing our app to the folder that we want them to look at.
// This line of code connects our server-side code (the code in the server.js file) 
// to our client-side code (the browser code written in the files housed in the website folder).

const port = 3000;

// spin up the server
const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) });

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello Lakshay!");
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST received');
    console.log(req.body); //data received from client.
});

app.post('/add', addAnimal);

const addAnimal = (req, res) => {
    newEntry = {
        animal: req.body.animal,
    }
    animalData.push(newEntry);
    res.send(animalData);
}
