const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  profession: String,
  photo: String,
  description: String,
  skills: [String],
  experience: String,
  type: { type: String, enum: ['homepage', 'doctorpage'], required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
