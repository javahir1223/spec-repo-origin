const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  photo: String,
  author: String,
  title: String,
  desc: String,
  more_desc: String,
});

module.exports = mongoose.model('Blog', blogSchema);
