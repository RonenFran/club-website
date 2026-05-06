import ClubPageBanner from "../components/clubPageBanner.jsx";
import ClubPageMessages from "../components/clubPageMessages.jsx";
import ClubPageDescription from "../components/clubPageDescription.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ClubPage({ clubId }) {
  const [clubInfo, setClubInfo] = useState([]);

  useEffect(() => {
    const fetchClubInfo = async () => {
      const res = await axios.get(`/api/clubs/${clubId}`);
      setClubInfo(res.data);
    };

    fetchClubInfo();
  }, []);

  return (
    <>
      {/* Club banner */}
      <ClubPageBanner
        clubName={clubInfo.name}
        clubSlogan={clubInfo.slogan}
        clubBanner={clubInfo.bannerPath}
      />

      <div className="mt-40 h-[140vh]">
        {/* Club description */}
        <ClubPageMessages />

        {/* Message board for club posts and updates */}
        <div className="relative h-full -top-[125vh] pl-16 pointer-events-none">
          <ClubPageDescription />
        </div>

        {/* Member list (Potential component)*/}
      </div>
    </>
  );
}
