import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import AdminLayout from './layouts/AdminLayout';
import EventList from './pages/admin/EventListing';
import AdminLogin from './pages/admin/AdminLogin';
import About from './pages/About'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin onLogin={() => setIsAuthenticated(true)} />} />

        {/* Admin Routes (Protected) */}
        {isAuthenticated ? (
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="events" element={<EventList />} />
            {/* Add more protected routes here */}
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/admin/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
