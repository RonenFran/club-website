import ClubBrowserItem from "./clubBrowserItem";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ClubBrowserList({ clubs }) {
  const [clubCounts, setClubCounts] = useState({});

  // Fetching number of members in the club
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(`/api/clubs/membercount`);
        setClubCounts(res.data.reduce((acc, r) => ({ ...acc, [r.clubId]: r.count }), {}));
      } catch (err) {
        console.error("Failed to fetch member count", err);
        setClubCounts({});
      }
    };

    fetchCount();
  }, []);

  return (
    <>
      {/* Dropdown container */}
      <div className="flex flex-col m-8">
        {clubs.map((club) => (
          <ClubBrowserItem key={club.clubId} club={club} memberCount={clubCounts[club.clubId]} />
        ))}
      </div>
    </>
  );
}
