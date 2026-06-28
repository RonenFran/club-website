import { Link } from "react-router-dom";
import { useAuth } from "../auth";
import { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";

export default function ProfileDropdown() {
  const { isAuthenticated } = useAuth();
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function pointerDownEvent(e) {
      if (!dropdownRef.current) return;
      if (dropdownRef.current.contains(e.target)) return;
      setDisplayDropdown(false);
    }

    if (displayDropdown) {
      document.addEventListener("pointerdown", pointerDownEvent);
    }

    return () => {
      document.removeEventListener("pointerdown", pointerDownEvent);
    };
  }, [displayDropdown]);

  return (
    <div ref={dropdownRef}>
      <div
        className="bg-gray-400 size-12 p-2 rounded-3xl mr-4 cursor-pointer"
        id="profile"
        onClick={() => setDisplayDropdown(!displayDropdown)}
      >
        <FaUser className="size-8 text-secondary" />
      </div>

      {isAuthenticated ? (
        <div
          className={`flex flex-col absolute top-20 right-2 w-24 text-center bg-secondary shadow-md rounded-md px-1 z-10 text-lg font-semibold border text-primary ${displayDropdown ? "" : "hidden"}`}
        >
          <Link to="/profile" className="py-1 border-b-2">
            Profile
          </Link>
          <Link to="/logout" className="py-1 z-10">
            Log out
          </Link>
        </div>
      ) : (
        <div
          className={`flex flex-col absolute top-20 right-2 w-36 text-center bg-secondary shadow-md rounded-md px-1 z-10 text-xl font-semibold border text-primary ${displayDropdown ? "" : "hidden"}`}
        >
          <div className="absolute -top-2 right-6 size-4 bg-secondary rotate-45 border-t border-l -z-10" />

          <Link to="/login" className="py-1 border-b-2">
            Log in
          </Link>
          <Link to="/signup" className="py-1 z-10">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
}
