import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardHeader from "../../layouts/Dashboard/DashboardHeader";

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
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <main>
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
          </div>
        </main>
      )}
    </div>
  );
};

export default Dashboard;
