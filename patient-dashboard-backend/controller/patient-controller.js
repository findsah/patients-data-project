import PatientModal from "../modal/patient.js";

export const addPatient = async (request, response) => {
  // retreive the info of user from frontend
  const patient = request.body;

  // Create all objects
  const objects = patient.map((x) => new PatientModal(x));

  try {
    // Saves objects
    const docs = await Promise.all(objects.map((x) => x.save()));
  } catch (e) {
    // An error happened
  }
};

export const getPatients = async (request, response) => {
  // Step -1 // Test API
  // response.send('Code for Interview');
  // console.log("checked")
  try {
    // finding something inside a model is time taking, so we need to add await
    const patientData = await PatientModal.find();
    response.status(200).json(patientData);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
