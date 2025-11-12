import { Link } from "react-router-dom"; // Importing Link for navigation

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <ul className="flex flex-row justify-start items-center gap-4 text-xl p-4">
        <li>
          <img src="/smu_logo_white.png" alt="Logo" className="w-40" />
        </li>
        <li>
          <Link to="/" className="text-secondary">Home</Link>
        </li>
        <li>
          <Link to="/browse" className="text-secondary">Browse</Link>
        </li>
        <li>
          <Link to="/myClubs" className="text-secondary">My Clubs</Link>
        </li>
        <li>
          <Link to="/events" className="text-secondary">Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
