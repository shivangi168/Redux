import React from "react";

const UserProfile = ({ user, logout }) => {
  return (
    <div className="container mt-5">
      <h2>Welcome, {user}!</h2>
      <p>Your profile details:</p>
      <ul className="list-group">
        <li className="list-group-item">Username: {user}</li>
        <li className="list-group-item">Email: {user}@example.com</li>
        <li className="list-group-item">Role: User</li>
      </ul>
      <button className="btn btn-danger mt-3" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
