import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ Make sure it's inside Router

  const login = (username) => {
    if (!username) {
      console.warn("Username can't be empty!");
      return;
    }
    setUser({ name: username });
    navigate("/dashboard"); // ✅ Redirect after login
  };

  const logout = () => {
    setUser(null);
    navigate("/login"); // ✅ Always redirect to login on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
