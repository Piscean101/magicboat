
// Importing the express module
var express = require('express');

// Initializing the express and port number
var app = express();

// Initializing the router from express
var router = express.Router();
var PORT = 3000;

// App routes defined below
app.get("/", (req, res) => {
  res.send('big booty hoe');
})

app.get("/try", (req, res) => {
  res.send('u really trying me hoe?');
})
 
