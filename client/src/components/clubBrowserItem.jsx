import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClubBrowserItem({ club }) {
  const [clubCount, setClubCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/membership/${club.clubId}`);
        setClubCount(res.data);
      } catch (err) {
        console.error("Failed to fetch member count", err);
        setClubCount(0); // graceful fallback
      }
    };

    fetchCount();
  }, [club.clubId]);

  return (
    <Link to={club.clubLink}>
      <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md items-center">
        {/* Icon */}
        <img
          src={club.iconPath}
          alt="Club icon"
          className="size-20 border-2 border-primary rounded-[50%]"
        />

        {/* Club and Members */}
        <div className="flex flex-col gap-2 p-1">
          <span className="font-semibold text-primary text-xl">{club.name}</span>
          <div className="flex items-center mt-1 text-gray-600">
            <svg viewBox="0 0 5 5" fill="currentColor" aria-hidden="true" className="size-4 mr-1">
              <circle r="1" cx="2.5" cy="1.5" />
              <circle r="1.5" cx="2.5" cy="4.5" />
            </svg>
            {clubCount + " Members"}
          </div>
        </div>

        {/* Add club button */}
        <svg
          viewBox="0 0 10 10"
          fill="white"
          className="bg-primary size-12 border-2 border-primary rounded-md ml-auto mr-2"
        >
          <rect width="7" height="1.5" x="1.5" y="4.25" rx="0.5" />
          <rect width="1.5" height="7" x="4.25" y="1.5" ry="0.5" />
        </svg>
      </div>
    </Link>
  );
}
