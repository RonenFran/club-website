import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api";

export default function ClubBrowserItem({ club }) {
  const [clubCount, setClubCount] = useState(0);

  // Fetching number of members in the club
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(`/api/members/${club.clubId}`);
        setClubCount(res.data);
      } catch (err) {
        console.error("Failed to fetch member count", err);
        setClubCount(0); // graceful fallback
      }
    };

    fetchCount();
  }, [club.clubId]);

  return (
    // Overall link to the club
    <Link to={"/clubpage/" + club.name}>
      <div className="flex flex-row bg-secondary gap-6 p-2 border-2 border-primary rounded-md items-center transition duration-250 ease-in-out hover:brightness-90 hover:scale-95 hover:-translate-y-2">
        {/* Icon */}
        <img
          src={club.iconPath}
          alt="Club icon"
          className="size-20 border-2 border-primary object-cover rounded-[50%]"
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
          className="bg-primary size-12 border-2 border-primary rounded-md ml-auto mr-2 transition ease-in-out hover:brightness-75 hover:scale-125"
        >
          <rect width="7" height="1.5" x="1.5" y="4.25" rx="0.5" />
          <rect width="1.5" height="7" x="4.25" y="1.5" ry="0.5" />
        </svg>
      </div>
    </Link>
  );
}
