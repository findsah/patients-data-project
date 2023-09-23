const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  client_id: String,
  date_testing: Date,
  date_birthdate: Date,
  gender: Number,
  ethnicity: Number,
  creatine: Number,
  creatine_unit: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Patient', patientSchema);
