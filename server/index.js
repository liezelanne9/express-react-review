// Express here
const express = require('express');
const bodyParser = require('body-parser'); // parses chunks and puts in body of request
const morgan = require('morgan'); // console.logs types of requests for you
const path = require('path'); // no need to npm install, automatically comes with node

const router = require('./router.js')

const server = express()

server.use(morgan('dev'));
server.use(bodyParser.json());

// Use express.static to serve our index.html in client/dist/
server.use('/', express.static(path.join(__dirname, '/../client/dist/')));

server.use('/api', router); // handles any server requests to database

// Create a basic .get to path '/name' that sends a response with your name
// server.get('/name', (req, res) => {
//     res.send('Liezel');
// })

const port = 3000;

server.listen(port, () => console.log(`Connected to port ${port}`));