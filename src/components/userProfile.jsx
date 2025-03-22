import React from 'react';
import { useParams , useLocation } from "react-router-dom";

function UserProfile() {
  const { id } = useParams(); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const user = location.state;
  const surName = queryParams.get("surname");

  return (
    <div>
      <h1>User Profile</h1>
      {/* <p>Welcome, User ID: {id}</p>
      <p>Welcome, User: {user.name || "NA"}</p>
      <p>Welcome, User: {user.role || "NA"}</p> */}
      <p>Welcome, User: {surName || "NA"}</p>
      {/* <p>Welcome, User ID: {location.state.id}</p> */}
      

    </div>
  );
}

export default UserProfile;
