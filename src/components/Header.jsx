import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import "./Header.css";

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Container</Link></li>
          <li><Link to="/ReactQuery">React Query</Link></li>
          <li><Link to="/cityStateManger">state crud</Link></li>
          {user ? (
            <>
              <li><span>👤 {user}</span></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
