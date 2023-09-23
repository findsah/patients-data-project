import express from "express";
import { addPatient, getPatients } from "../controller/patient-controller.js";

const patientRouters = express.Router();

// patientRouters.get('/get', getGyms);
patientRouters.post("/addpatients", addPatient);
patientRouters.get("/patientslist", getPatients);

export default patientRouters;
