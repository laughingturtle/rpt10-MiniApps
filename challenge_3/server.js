const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/F1', (req, res) => {
  res.send('step one data received')
});

app.post('/F2', (req, res) => {
  res.send('step two data received')
});

app.post('/F3', (req, res) => {
  res.send('step three data received')
});


app.listen(port, () => {
  console.log(`Server is now running on ${port}`);
});

