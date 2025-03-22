import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import { useContext } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./components/userProfile";
import NoPageFound from "./components/NoPageFound";
import ProtectedRoute from "./pages/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import './App.css'


function App() {
  return (
    <Router> 
      <AuthProvider>
        <AuthWrapper />
      </AuthProvider>
    </Router>
  );
}

const AuthWrapper = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={user ? <MainRoutes /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

export default App;
