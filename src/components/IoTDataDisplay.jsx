import React from "react";

const IoTDataDisplay = ({ iotData }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>IoT Sensor Data</h3>
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Device ID</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {iotData.map((row, index) => (
            <tr key={index}>
              <td>{row.timestamp}</td>
              <td>{row.device_id}</td>
              <td>{row.temperature}</td>
              <td>{row.humidity}</td>
              <td>{row.pressure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IoTDataDisplay;
