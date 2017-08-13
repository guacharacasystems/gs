//server requires these packages
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

//app is initialized with express application
var app = express();

//server will be using json body parser
app.use(bodyParser.urlencoded({ extended: false }))
//server will have access to static data - images, javascript files, etc.
app.use(express.static('./'));

//server will serve the index file
app.get('/', function(req, res){
  console.log('requested GET')
  res.sendfile('index.html');
});

//server will be listening for requests
app.listen( process.env.PORT || 3000, function(){
  console.log('Server listening...')
});
