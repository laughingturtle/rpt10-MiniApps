const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Cart = require('./db/cart.js');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

var id;

app.post('/p1', (req, res) => {
  // console.log('Were here on the server dude');
  // console.log('my data being passed with axios ON SERVER: ', req.body);
  var data = req.body;
 // console.log('my data on the server', data);
  Cart.create(data, (err, result) => {
    if(err){
      //console.log('error getting all from db ', err);
      res.status(404).send('error getting the data', err);
      throw err;
    } else {
     // console.log('success! ', result);
     id = result._id;
     console.log('my id data result on server ---> ', id);
      res.status(200).send(result);
    }
  });
});

app.post('/p2', (req, res) => {
  var data = req.body;
  console.log('my data on the server', data);
  Cart.findOneAndUpdate({_id: id},{$set:data},{new: true},(err, result) => {
    if(err) {
      res.status(404).send('error getting the data', err);
      throw err;
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/p3', (req, res) => {
  var data = req.body;
  console.log('my data on the server', data);
  Cart.findOneAndUpdate({_id: id},{$set:data},{new: true},(err, result) => {
    if(err) {
      res.status(404).send('error getting the data', err);
      throw err;
    } else {
      res.status(200).send(result);
    }
  });
});


app.listen(port, () => {
  console.log(`Server is now running on ${port}`);
});

