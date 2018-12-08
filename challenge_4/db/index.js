var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  database: 'connect4'
});

connection.connect( err => {
  if(err){
    throw err;
  } else {
    console.log('You are now connected...');
  }
});

module.exports.connection = connection;