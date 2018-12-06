var express = require('express');

const app = express();
const port = 3001;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./client/dist/'));

app.listen(port, () => {
  console.log(`Server is now running on ${port}`);
});