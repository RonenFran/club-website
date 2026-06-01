import ClubBrowserItem from "./clubBrowserItem";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUserClubs } from "../hooks/useUserClubs";

export default function ClubBrowserList({ clubs }) {
  const [clubCounts, setClubCounts] = useState({});
  const { userClubs, isAuthenticated, user, loading } = useUserClubs();
  // Fetching number of members in the club
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(`/api/clubs/membercount`);
        // Turn array of object pairs into dictionary
        setClubCounts(res.data.reduce((acc, r) => ({ ...acc, [r.clubId]: r.count }), {}));
      } catch (err) {
        console.error("Failed to fetch member count", err);
        setClubCounts({});
      }
    };

    fetchCount();
  }, []);

  if (loading) return null;
  else
    return (
      <>
        {/* Dropdown container */}
        <div className="flex flex-col m-8">
          {clubs.map((club) => (
            <ClubBrowserItem
              key={club.clubId}
              club={club}
              memberCount={clubCounts[club.clubId]}
              loggedIn={isAuthenticated}
              memberStatus={userClubs.find((c) => c.clubId === club.clubId)?.status}
              userId={user?.userId}
            />
          ))}
        </div>
      </>
    );
}
