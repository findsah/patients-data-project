"use client";

import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { dummyData } from "./dummy";
// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// import dynamic from "next/dynamic"; // Import dynamic
// const { Line } = dynamic(() => import("react-chartjs-2"), { ssr: false });

const ChartComponent = ({ patientData }) => {
  const fetchRef = useRef();

  const [chartData, setChartData] = useState({
    labels: [
      "2023-01",
      "2023-02",
      "2023-03",
      "2023-04",
      "2023-05",
      "2023-06",
      "2023-07",
    ],
    datasets: [
      {
        data: [100, 120, 115, 134, 168, 132, 200],
        backgroundColor: "purple",
      },
    ],
  });

  const getDummyData = async () => {
    await axios
      .get("http://localhost:8080/patients/patientslist")
      .then(function (response) {
        console.log(response);
        // setChartData(response?.data?.slice(0, 10));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addPatientData = async (data) => {
    console.log(data);
    return await axios.post(`http://localhost:8080/patients/addpatients`, data);
  };

  // const LineChartData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/patients/");
  //     const patientData = response.data;
  //     console.log(patientData);
  //     return { props: { patientData } };
  //   } catch (error) {
  //     console.error("Error fetching patient data:", error);
  //     return { props: { patientData: [] } };
  //   }
  // };

  useEffect(() => {
    if (fetchRef.current) return;
    fetchRef.current = true;
    // addPatientData(dummyData);
    // LineChartData();
    getDummyData();

    // const response = axios.get("https://mockapi-furw4tenlq-ez.a.run.app/data");
    // console.log(response);
  }, []);

  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <h2>Creatine Levels Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
