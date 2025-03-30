import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const login = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      if (response.data.message === "Login successful") {
        setUser(username);
        localStorage.setItem("user", username);
        localStorage.setItem("token", response.data.token); // Save token
        alert("Login successful!");
        return true;
      }
    } catch (error) {
      alert("Invalid credentials!");
      return false;
    }
  };


  const logout = async () => {
    try {
        const response = await axios.post("http://localhost:5000/api/logout");
        if (response.status === 200) {
            localStorage.removeItem("token");
            localStorage.removeItem("user"); // Remove user as well
            setUser(null); 
            alert("Logged out!");
            // window.location.href = "/login";
        } else {
            alert("Logout failed!");
        }
    } catch (error) {
        console.error("Error during logout:", error.message);
        alert("Logout failed! Please try again.");
    }
};


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
