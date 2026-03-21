let lstDogs = [
  {_id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3, gender: 'Male', description: 'Friendly and great with families', is_approved: 1},
  {_id: 2, name: 'Max', breed: 'German Shepherd', age: 5, gender: 'Male', description: 'Loyal and highly intelligent working dog', is_approved: 1},
  {_id: 3, name: 'Bella', breed: 'Bulldog', age: 4, gender: 'Female', description: 'Calm, courageous, and loves lounging', is_approved: 1},
  {_id: 4, name: 'Charlie', breed: 'Beagle', age: 2, gender: 'Male', description: 'Curious and energetic with a great sense of smell', is_approved: 0},
  {_id: 5, name: 'Lucy', breed: 'Poodle', age: 6, gender: 'Female', description: 'Very smart and hypoallergenic coat', is_approved: 0},
  {_id: 6, name: 'Rocky', breed: 'Rottweiler', age: 7, gender: 'Male', description: 'Confident and protective companion', is_approved: 0},
  {_id: 7, name: 'Daisy', breed: 'Dachshund', age: 1, gender: 'Female', description: 'Playful and brave with a long body', is_approved: 0},
  {_id: 8, name: 'Luna', breed: 'Siberian Husky', age: 3, gender: 'Female', description: 'Energetic with striking blue eyes', is_approved: 0}
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