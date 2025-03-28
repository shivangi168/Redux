import { Link } from "react-router-dom";
import "./Header.css"; 


function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">container</Link></li>
          <li><Link to="/ReactQuery">React query</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
