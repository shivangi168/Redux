// App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';
import AdminLayout from './layouts/AdminLayout';
import EventList from './pages/admin/EventListing';
import AdminLogin from './pages/admin/AdminLogin';
// import Workshop from './pages/admin/Workshop';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLogin onLogin={() => setIsAuthenticated(true)} />} />

        {isAuthenticated ? (
          <Route path="/admin/*" element={<AdminLayout />}> 
            <Route path="events" element={<EventList />} />
            {/* <Route path="workshops" element={<Workshop />} /> */}
          </Route>
        ) : (
          <Route path="/admin/*" element={<Navigate to="/admin/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import Header from "./components/Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import UserProfile from "./components/userProfile";
// import NoPageFound from "./components/NoPageFound";
// // import Login from "./pages/Login";
// // import Dashboard from "./pages/Dashboard";
// import "./App.css";
// import ReactQuery from "./pages/ReactQuery";
// import ListingList from './pages/ListingList';
// // import CityStateManager from './pages/CityStateManager';

// const queryClient = new QueryClient();

// function App() {
//   return (
//     <Router>
//       <QueryClientProvider client={queryClient}>
//         {/* <Header /> */}
//         <Routes>
//           <Route path="/" element={<ListingList />} />
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//           {/* <Route path="/login" element={<Login />} /> */}
//           {/* <Route path="/listing" element={<ListingList />} /> */}
//           {/* <Route path="/cityStateManger" element={<CityStateManager />} /> */}
//           <Route path="*" element={<NoPageFound />} />
//         </Routes>
//       </QueryClientProvider>
//     </Router>
//   );
// }

// export default App;
