const express = require('express');
const http = require('http');
var bodyParser = require('body-parser');
const app = express();

const port = 3004;


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
  //console.log('data on server:',  req.body);
  var data = req.body;
  //console.log('data', data);
  var result = convert(data);
  console.log('my result: ', result);
  res.status(200).send(result);

})

app.get('/', function (req, res) {
  res.status(200).send('GET request from the homepage');
})

function convert(data) {
//  var stringify = data;
 // console.log('** I\'m running ** ', data);

  var str = '';

  for(var key in data){
    if(key !== 'children'){
      str += key + ',';
    }

  }

  str = str.slice(0, -1);
  str += '\r\n';

  function JSONtoCSV(node){
    for(var key in node){
      if(key !== 'children'){
        if (node.hasOwnProperty(key)){
          str += node[key] + ',';
        }
      }
    }
    str = str.slice(0, -1);
    str += '\r\n';
  //  console.log('my array: ', node.children);
  //  console.log('my array length: ', node.children.length);
    if(node.children.length > 0){
      console.log('yay, let\'s go around again!');
      for(var i =0; i < node.children.length; i++){
        JSONtoCSV(node.children[i]); 
      }
    }
  }
  JSONtoCSV(data);
  console.log('my str', str);
  return str;
}