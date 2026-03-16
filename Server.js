let lstDogs = [
  {"id":1,"name":"Buddy","breed":"Golden Retriever","age":3,"weight":65},
  {"id":2,"name":"Luna","breed":"Labrador Retriever","age":2,"weight":55},
  {"id":3,"name":"Max","breed":"German Shepherd","age":4,"weight":75},
  {"id":4,"name":"Bella","breed":"French Bulldog","age":3,"weight":28},
  {"id":5,"name":"Charlie","breed":"Beagle","age":5,"weight":30},
  {"id":6,"name":"Daisy","breed":"Poodle","age":2,"weight":45},
  {"id":7,"name":"Rocky","breed":"Rottweiler","age":6,"weight":95},
  {"id":8,"name":"Milo","breed":"Siberian Husky","age":3,"weight":50}
];

let hostname = "localhost";
let port = 4000;

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application

app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('view/WebPage') ); // Static page server will use the folder 'WebPage'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Restful Get Action (http://localhost:4000/dog)
app.get("/dog",function(req,res){
    res.status(200); // Ok status
    res.send(lstDogs); // Sending the array
    res.end(); // Ends the response (optional but important)
});


const server = app.listen(port,hostname,function(){ // Asynchronous Listen to client requests in hostname:port
    console.log(`Server running on http://${hostname}:${port}/index.html`); // Must be here due to the asynchronous nature of the app.listen()
});