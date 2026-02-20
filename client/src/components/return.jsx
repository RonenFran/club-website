import { Link } from "react-router-dom";

export default function Return() {
  return (
    <Link to="/">
      <div className="flex items-center absolute w-24 top-4 left-4">
        <svg viewBox="0 0 100 100">
          <polygon points="20,0 0,50 10,50 30,0" fill="maroon" />
          <polygon points="20,100 0,50 10,50 30,100" fill="maroon" />
          <polygon points="60,0 40,50 50,50 70,0" fill="maroon" />
          <polygon points="60,100 40,50 50,50 70,100" fill="maroon" />
        </svg>
        <div className="font-semibold text-2xl pb-1 text-primary-600">Return</div>
      </div>
    </Link>
  );
}
