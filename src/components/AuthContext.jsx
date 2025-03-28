
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
        alert("Login successful!");
        return true;
      }
    } catch (error) {
      alert("Invalid credentials!");
      return false;
    }
  };
  
  const logout = async () => {
    await axios.post("http://localhost:5000/api/logout");
    setUser(null);
    localStorage.removeItem("user");
    alert("Logged out!");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// import { useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   const login = (username) => {
//     if (!username) {
//       console.warn("Username can't be empty!");
//       return;
//     }
//     setUser({ name: username });
//     navigate("/dashboard"); 
//   };

//   const logout = () => {
//     setUser(null);
//     navigate("/login"); 
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

