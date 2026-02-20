import { useRouteLoaderData, Link } from "react-router-dom";

export default function ProfileDropdown() {
  const user = useRouteLoaderData("root");
  let dropdown = [];

  if (user) {
    dropdown = (
      <>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Log out</Link>
      </>
    );
  } else {
    dropdown = (
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </>
    );
  }

  return (
    <div className="bg-gray-400 size-12 p-2 rounded-3xl mr-4">
      <svg viewBox="0 0 5 5" fill="white" aria-hidden="true" className="size-8 mr-4">
        <circle r="1" cx="2.5" cy="1.5" />
        <circle r="1.7" cx="2.5" cy="4.5" />
      </svg>
      {dropdown}
    </div>
  );
}
