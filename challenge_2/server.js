const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
let converter = require('json-2-csv');
const app = express();

const port = 3001;
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
  var processData = req.body;
  console.log('data', processData);
  var data = converter.json2csv(processData, function (err, csv){
    if(err){
      console.log('error in processing', err);
    } else {
      console.log('result', csv);
      res.status(200).send(csv);
    }
  }
  );
  // var result = convertToCSV(processData);
  // console.log('my result: ', result);

})

app.get('/', function (req, res) {
  res.status(200).send('GET request from the homepage');
})

function convertToCSV(data) {
  var stringify = JSON.stringify(data);
  console.log('** I\'m running ** ', JSON.parse(stringify));

  var arr = typeof data != 'object' ? JSON.parse(data) : data;
  var str = '';

  for (var i = 0; i < arr.length; i++) {
      var line = '';
      for (var index in arr[i]) {
          if (line != '') line += ','
          line += arr[i][index];
      }
      str += line + '\r\n';
  }

  console.log('ma str', str);
  return str;
}

