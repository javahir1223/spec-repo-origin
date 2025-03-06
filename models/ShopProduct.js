const mongoose = require('mongoose');

const shopProductSchema = new mongoose.Schema({
  name: String,
  photo: String,
  category: String,
  price: Number,
  description: String,
});

module.exports = mongoose.model('ShopProduct', shopProductSchema);
