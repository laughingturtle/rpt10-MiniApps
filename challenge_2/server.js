const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();

const port = 3001;
// var ip = '127.0.0.1';

http.createServer(app).listen(port, function () {
  console.log('Listening on Port ' + port);
});

/* index.html */
app.use(express.static('client'));
// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

/* routes */
app.post('/json', function (req, res) {
  console.log('data on server:',  {message: req.body.children});
  res.status(200).send('POST request to the server');
  res.end();
})

app.get('/', function (req, res) {
  res.status(200).send('GET request from the homepage');
})

