const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();

const port = 3000;
// var ip = '127.0.0.1';

http.createServer(app).listen(port, function () {
  console.log('Listening on Port ' + port);
});

/* index.html */
app.use(express.static('public'));
// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

/* routes */
app.post('/json', function (req, res) {
 // console.log('data on server:',  req.body);
  var data = req.body;
  //console.log('data', data);
  var result = convertToCSV(data);
  console.log('my result: ', result);
  res.status(200).send(result);
})

app.get('/', function (req, res) {
  res.status(200).send('GET request from the homepage');
})

function convertToCSV(data) {
  var stringify = JSON.stringify(data);
  console.log('** I\'m running ** ', JSON.parse(stringify));

  var array = typeof data != 'object' ? JSON.parse(data) : data;
  var str = '';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') line += ','
          line += array[i][index];
      }
      str += line + '\r\n';
  }

  console.log('ma str', str);
  return str;
}

