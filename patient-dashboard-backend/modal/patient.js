import mongoose from "mongoose";

// how our document look like
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

// we need to turn it into a model
const PatientModal = mongoose.model("PatientModal", patientSchema);

export default PatientModal;
