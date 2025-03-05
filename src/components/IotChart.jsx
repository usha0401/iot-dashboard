import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const IoTChart = ({ iotData }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>IoT Data Visualization</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={iotData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature (°C)" />
          <Line type="monotone" dataKey="humidity" stroke="#007bff" name="Humidity (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IoTChart;
