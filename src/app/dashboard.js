import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";

import ChartComponent from "./ChartComponent"; // Adjust the import path as needed

const Dashboard = ({ patientData }) => {
  // component code here, including other visualizations
  console.log(patientData);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <ChartComponent patientData={patientData} />
      {/* Can Add other visualizations and patient data here */}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:5000/api/patients/");
    const patientData = response.data;
    return { props: { patientData } };
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return { props: { patientData: [] } };
  }
}

export default Dashboard;
