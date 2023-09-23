import React from 'react';
import { Line } from 'react-chartjs-2';
import dynamic from 'next/dynamic';


const LineChart = ({ chartData, chartOptions }) => {
  return <Line data={chartData} options={chartOptions} />;
};

export default dynamic(() => Promise.resolve(LineChart), { ssr: false });
