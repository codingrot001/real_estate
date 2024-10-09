import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Check for token and fetch user details on initial render
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      axios
        .get("http://localhost:5000/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data); // Set user data from response
        })
        .catch((err) => {
          console.error("Failed to fetch user details", err);
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        });
    }
  }, []);

  // Function to log in the user
  const login = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        formData
      );
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      // Update user state to include the role
      setUser({ ...response.data.user, role: response.data.user.role });
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error
      );
      throw error;
    }
  };
  
  // Function to register the user
  const register = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      // Update user state to include the role
      setUser({ ...response.data.user, role: response.data.user.role });
    } catch (error) {
      console.error(
        "Register Error:",
        error.response ? error.response.data : error
      );
      throw error;
    }
  };

  // Function to log out the user
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
