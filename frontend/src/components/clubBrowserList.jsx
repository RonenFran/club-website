import { useEffect, useState } from "react";
import axios from "../api";
import ClubBrowserItem from "./clubBrowserItem";

export default function ClubBrowserList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      const res = await axios.get(`/api/clubs`);
      setClubs(res.data);
    };

    fetchClubs();
  }, []);

  return (
    <>
      {/* Dropdown container */}
      <div className="flex flex-col m-8">
        {clubs.map((club) => (
          <ClubBrowserItem key={club.clubId} club={club} />
        ))}
      </div>
    </>
  );
}
