const axios = require('axios');
const mongoose = require('mongoose');

// Define your MongoDB schema
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

const Patient = mongoose.model('Patient', patientSchema);

async function fetchDataAndStoreInDB() {
  try {
    // Fetch data from the API
    const response = await axios.get('https://mockapi-furw4tenlq-ez.a.run.app/data');

    // Parse the response data and save it to your MongoDB collection
    const patientsData = response.data; // Assuming the data is an array of patients

    // Insert the data into the MongoDB collection
    await Patient.insertMany(patientsData);

    console.log('Data fetched and stored successfully.');
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Connect to MongoDB and call the function
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    fetchDataAndStoreInDB();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
