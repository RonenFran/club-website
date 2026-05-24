import ClubPageBanner from "../components/clubPageBanner.jsx";
import ClubPageBoard from "../components/clubPageBoard.jsx";
import ClubPageDescription from "../components/clubPageDescription.jsx";
import ClubPageSidebar from "../components/clubPageSidebar.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ClubPage() {
  const [clubInfo, setClubInfo] = useState({});
  const { clubName } = useParams();

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

      <div className="grid grid-cols-5 mx-auto mt-30 h-[120vh] w-[95vw] rounded-xl bg-primary-700 shadow-[0_0_10px_3px_rgba(0,0,0,0.35)]">
        {/* Club description side panel*/}
        <div className="relative h-full top-[-2vh] pl-4">
          <ClubPageDescription clubInfo={clubInfo} />
        </div>

        {/* Message board for club announcements */}
        <ClubPageBoard />

        <ClubPageSidebar />
      </div>
    </>
  );
}
