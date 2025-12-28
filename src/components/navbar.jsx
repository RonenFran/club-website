import { Link } from "react-router-dom"; // Importing Link for navigation

const Navbar = () => {
  return (
    <nav className="z-40 bg-primary relative shadow-[0_4px_20px_rgba(0,0,0,0.4)] z-50">
      <ul className="flex flex-row justify-start items-center gap-4 text-xl p-4">
        <li>
          <img src="/smu_logo_white.png" alt="Logo" className="w-40" />
        </li>
        <li>
          <Link to="/" className="text-secondary font-bold">Home</Link>
        </li>
        <li>
          <Link to="/browse" className="text-secondary font-bold">Browse</Link>
        </li>
        <li>
          <Link to="/myClubs" className="text-secondary font-bold">My Clubs</Link>
        </li>
        <li>
          <Link to="/events" className="text-secondary font-bold">Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
