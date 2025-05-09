import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./components/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import "./App.css";
import ReactQuery from "./pages/ReactQuery";
import ListingList from './pages/ListingList';
// import CityStateManager from './pages/CityStateManager';



const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <AuthWrapper />
        </QueryClientProvider>
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
        <Route path="/listing" element={<ListingList />} />
        {/* <Route path="/cityStateManger" element={<CityStateManager />} /> */}
        <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
};

export default App;
