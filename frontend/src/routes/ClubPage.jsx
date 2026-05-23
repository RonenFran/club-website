import ClubPageBanner from "../components/clubPageBanner.jsx";
import ClubPageMessages from "../components/clubPageMessages.jsx";
import ClubPageDescription from "../components/clubPageDescription.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ClubPage() {
  const [clubInfo, setClubInfo] = useState({});
  const { clubName } = useParams();

  console.log(clubInfo);

  useEffect(() => {
    const fetchClubInfo = async () => {
      const res = await axios.get(`/api/clubs/${clubName}`);
      setClubInfo(res.data[0]);
    };

    fetchClubInfo();
  }, []);

  return (
    <>
      {/* Club banner */}
      <ClubPageBanner name={clubInfo.name} slogan={clubInfo.slogan} banner={clubInfo.bannerPath} />

      <div className="mt-40 h-[140vh]">
        {/* Message board for club posts and updates */}
        <ClubPageMessages />

        {/* Club description side panel*/}
        <div className="relative h-full top-[-125vh] pl-16 pointer-events-none">
          <ClubPageDescription />
        </div>

        {/* Member list (Potential component)*/}
      </div>
    </>
  );
}
