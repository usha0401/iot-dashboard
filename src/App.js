import React, { useState, useEffect } from "react";
import axios from "axios";
import IoTDataDisplay from "./components/IoTDataDisplay";
import IoTChart from "./components/IotChart";
import "./App.css"; // Import App.css for styling

const App = () => {
  const [iotData, setIotData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch IoT data
  const fetchIoTData = async () => {
    try {
      
      const response = await axios.get(process.env.PUBLIC_URL + "/iot-data.json");

      setIotData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching IoT data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIoTData(); // Fetch data initially

    // Refresh data every 5 seconds
    const interval = setInterval(() => {
      fetchIoTData();
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="app-container">
      <h2 className="dashboard-title">IoT Dashboard</h2>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <>
          <div className="chart-container">
            <IoTChart iotData={iotData} />
          </div>
          <div className="table-container">
            <IoTDataDisplay iotData={iotData} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
