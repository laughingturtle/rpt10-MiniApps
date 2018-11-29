var express = require('express');
var http = require('http');
var app = express();

var port = 3001;

http.createServer(app).listen(port, function () {
  console.log('Listening on Port ' + port);
});

/* routes */
app.get('/', function (req, res) {
  res.send('GET request from the homepage')
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})