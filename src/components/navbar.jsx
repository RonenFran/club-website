import { Link } from "react-router-dom"; // Importing Link for navigation
import "./Navbar.css"; // Importing CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <img src="/smu_logo_white.png" alt="Logo" className="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li>
          <Link to="/myClubs">My Clubs</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
