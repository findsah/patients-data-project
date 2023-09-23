// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 5000; // Choose your preferred port
const url = "mongodb://localhost:27017/";

// Enable CORS for your frontend
app.use(cors());

// Connect to MongoDB 167.86.158.12/32
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define a schema for your Patient model (similar to what you've shared before)
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

// Create a Patient model
const Patient = mongoose.model("Patient", patientSchema);

// Define an API endpoint to fetch patient data
app.get("/api/patients", async (req, res) => {
  try {
    // Fetch patient data from MongoDB
    const patients = await Patient.find().limit(10);
    res.json(patients);
  } catch (error) {
    console.error("Error fetching patient data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
