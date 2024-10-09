import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProperties: 0,
    totalUsers: 0,
    newMessages: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dashboard/stats"
        );
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">Total Properties</h2>
            <p className="text-2xl">{stats.totalProperties}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-2xl">{stats.totalUsers}</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold">New Messages</h2>
            <p className="text-2xl">{stats.newMessages}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
