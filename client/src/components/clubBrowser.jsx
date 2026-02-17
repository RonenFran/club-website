import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClubBrowser() {
  const [clubs, setClubs] = useState({});

  useEffect(() => {
    const fetchClubs = async () => {
      const res = await axios.get(`http://localhost:8080/api/clubs`);
      setClubs(res.data);
    };

    fetchClubs();
  }, []);

  return (
    <>
      {/* Dropdown container */}
      <div className="flex flex-col m-16 p-8 border-4 gap-4 rounded-lg border-solid border-primary w-[65%]">
        {/* Club 1 */}
        <Link to="/ClubPage">
          <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md items-center">
            {/* Icon */}
            <img
              src="/horse_cropped.jpg"
              alt="Horse head"
              className="size-20 border-2 border-primary rounded-[50%]"
            />

            {/* Club and Members */}
            <div className="flex flex-col gap-2 p-1">
              <span class="font-semibold text-primary text-xl">Equestrian Society</span>
              <div class="flex items-center mt-1 text-gray-600">
                <svg
                  viewBox="0 0 5 5"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 mr-1"
                >
                  <circle r="1" cx="2.5" cy="1.5" />
                  <circle r="1.5" cx="2.5" cy="4.5" />
                </svg>
                22 Members
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

        {/* Club 2 */}
        <Link to="TBA" className="clubItem">
          <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md items-center">
            {/* Icon */}
            <img
              src="/podium.jpg"
              alt="Podium"
              className="size-20 border-2 border-primary rounded-[50%]"
            />

            {/* Club and Members */}
            <div className="flex flex-col gap-2 p-1">
              <span class="font-semibold text-primary text-xl">Debate Team</span>
              <div class="flex items-center mt-1 text-gray-600">
                <svg
                  viewBox="0 0 5 5"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 mr-1"
                >
                  <circle r="1" cx="2.5" cy="1.5" />
                  <circle r="1.5" cx="2.5" cy="4.5" />
                </svg>
                14 Members
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

        {/* Club 3 */}
        <Link to="TBA" className="clubItem">
          <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md items-center">
            {/* Icon */}
            <img
              src="/league_cropped.jpg"
              alt="league"
              className="size-20 border-2 border-primary rounded-[50%]"
            />

            {/* Club and Members */}
            <div className="flex flex-col gap-2 p-1">
              <span class="font-semibold text-primary text-xl">
                League of Legends E-Sports Team
              </span>
              <div class="flex items-center mt-1 text-gray-600">
                <svg
                  viewBox="0 0 5 5"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 mr-1"
                >
                  <circle r="1" cx="2.5" cy="1.5" />
                  <circle r="1.5" cx="2.5" cy="4.5" />
                </svg>
                5 Members
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

        {/* Club 4 */}
        <Link to="TBA" className="clubItem">
          <div className="flex flex-row gap-6 p-2 border-2 border-primary rounded-md items-center">
            {/* Icon */}
            <img
              src="/chess_cropped.png"
              alt="Chess"
              className="size-20 border-2 border-primary rounded-[50%]"
            />

            {/* Club and Members */}
            <div className="flex flex-col gap-2 p-1">
              <span class="font-semibold text-primary text-xl">Chess Club</span>
              <div class="flex items-center mt-1 text-gray-600">
                <svg
                  viewBox="0 0 5 5"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 mr-1"
                >
                  <circle r="1" cx="2.5" cy="1.5" />
                  <circle r="1.5" cx="2.5" cy="4.5" />
                </svg>
                10 Members
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
      </div>
    </>
  );
}
