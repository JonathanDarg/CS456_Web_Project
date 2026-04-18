const userCont = require("./controller/UserController");

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan
const session = require('express-session'); // session for stateful
const mongostore = require('connect-mongo').default;

const app = express(); //creates a new Express Application

app.use(morgan('dev')); //For better logging, we use morgan
app.use( express.static('view/build') ); // Static page server will use the folder 'public_html'
app.use( express.static('public_html') ); // Static page server will use the folder 'public_html'

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/user",userCont.getAll);
app.get("/user/:uid",userCont.get);
app.post("/user",userCont.postCreateUpdate);
app.get('/deleteuser/:uid',userCont.getDelete);
app.post('/dologin', userCont.postLogin);
app.get('/loggeduser', userCont.getLoggedUser);
app.get('/logout',userCont.getLogout);


exports.app = app;