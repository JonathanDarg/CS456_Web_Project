const contactCont = require("./controller/ContactController");

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('view/build'));
app.use(express.static('public_html'));
app.use(express.static('view/WebPage'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Contact routes
app.get("/contact", contactCont.getAll);
app.get('/contact/delete/:uid', contactCont.getDelete);  
app.get("/contact/:uid", contactCont.get);               
app.post("/contact", contactCont.postCreateUpdate);

module.exports = { app };
