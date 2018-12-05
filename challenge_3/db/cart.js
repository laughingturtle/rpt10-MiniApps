const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const cartSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  cc: String,
  exp: String,
  cvv: String,
  billing_zip: String,
  createdAt: Date
},
  {
    timestamps: true
  }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;