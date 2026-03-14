let hostname = "localhost";
let port = 4000;

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application

app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('view/WebPage') ); // Static page server will use the folder 'WebPage'

app.use(express.urlencoded({extended: true}));
app.use(express.json());



const server = app.listen(port,hostname,function(){ // Asynchronous Listen to client requests in hostname:port
    console.log(`Server running on ${hostname}:${port}`); // Must be here due to the asynchronous nature of the app.listen()
});