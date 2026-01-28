import { Link } from "react-router-dom"; // Importing Link for navigation

const Navbar = () => {
  return (
    <nav className="z-40 flex justify-between items-center bg-primary relative shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <ul className="flex justify-start items-center gap-4 text-xl p-4">
        <li>
          <img src="/smu_logo_white.png" alt="Logo" className="w-40" />
        </li>
        <li>
          <Link to="/" className="select-none text-secondary font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Browse" className="select-none text-secondary font-bold">
            Browse
          </Link>
        </li>
        <li>
          <Link to="/MyClubs" className="select-none text-secondary font-bold">
            My Clubs
          </Link>
        </li>
        <li>
          <Link to="/Events" className="select-none text-secondary font-bold">
            Events
          </Link>
        </li>
      </ul>

      <Link to="/SignUp">
        <svg
          viewBox="0 0 5 5"
          fill="white"
          aria-hidden="true"
          className="size-8 mr-4"
        >
          <circle r="1" cx="2.5" cy="1.5" />
          <circle r="1.7" cx="2.5" cy="4.5" />
        </svg>
      </Link>
    </nav>
  );
};

export default Navbar;
