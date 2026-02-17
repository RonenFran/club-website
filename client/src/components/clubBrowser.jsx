import { useEffect, useState } from "react";
import axios from "axios";
import ClubBrowserItem from "./clubBrowserItem";

export default function ClubBrowser() {
  const [clubs, setClubs] = useState([]);

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
        {clubs.map((club) => (
          <ClubBrowserItem key={club.clubId} club={club} />
        ))}
      </div>
    </>
  );
}
