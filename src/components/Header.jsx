import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/ReactQuery">React Query</Link></li>
        </ul>
        {user && (
          <div className="profile-section">
            <FaUserCircle size={30} />
            <span className="username">{user}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
