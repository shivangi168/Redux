import React ,{useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Link } from "react-router-dom";
import CityStateManager from '../components/cityStateManager';



const  Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <CityStateManager/>
      <h2>Welcome, {user}!</h2>
      <p>Your profile details:</p>
      <ul className="list-group">
        <li className="list-group-item">Username: {user}</li>
        <li className="list-group-item">Email: {user}@example.com</li>
        <li className="list-group-item">Role: User</li>
        <li className="list-group-item">
        <Link to="/listing">Container</Link>
          go to listing</li>

      </ul>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;


// import { useContext } from "react";
// import { AuthContext } from "../components/AuthContext";

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <div>
//       <h2>Welcome, {user?.name}!</h2>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;
