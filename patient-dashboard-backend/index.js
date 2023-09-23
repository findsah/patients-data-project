import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

import patientRouters from "./server/patientRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Step 2 ------------------->
app.use("/patients", patientRouters);

const URL =
  "mongodb+srv://user:user123@gymcenter.msju4.mongodb.net/gymcenter?retryWrites=true&w=majority";
const PORT = process.env.PORT || "8080";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
