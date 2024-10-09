import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const UserProfile = () => {
  const { user, token } = useAuth();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get("/auth/user", {
        headers: { "x-auth-token": token },
      });
      setProfileData(response.data);
    };

    fetchProfile();
  }, [token]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      {/* Add form to update profile here */}
    </div>
  );
};

export default UserProfile;
