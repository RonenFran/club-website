import ClubPageBanner from "../components/clubPageBanner.jsx";
import ClubPageBoard from "../components/clubPageBoard.jsx";
import ClubPageDescription from "../components/clubPageDescription.jsx";
import ClubPageSidebar from "../components/clubPageSidebar.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../auth";

export default function ClubPage() {
  const [clubInfo, setClubInfo] = useState({});
  const [clubMembers, setClubMembers] = useState([]);
  const { clubName } = useParams();
  const { user, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    const fetchClubInfo = async () => {
      const res = await axios.get(`/api/clubs/${clubName}`);
      setClubInfo(res.data[0]);
    };

    fetchClubInfo();
  }, []);

  useEffect(() => {
    const fetchDescription = async () => {
      const res = await axios.get(`/api/clubs/${clubName}/members`);
      setClubMembers(res.data);
    };

    fetchDescription();
  }, []);

  return (
    <>
      {/* Club banner */}
      <ClubPageBanner name={clubInfo.name} slogan={clubInfo.slogan} banner={clubInfo.bannerPath} />

      <div className="grid grid-cols-5 mx-auto mt-30 h-[120vh] w-[95vw] rounded-xl bg-primary-700 shadow-[0_0_10px_3px_rgba(0,0,0,0.35)]">
        {/* Club description side panel*/}
        <div className="relative h-full top-[-1vh] pl-4">
          <ClubPageDescription clubInfo={clubInfo} clubMembers={clubMembers} />
        </div>

        {/* Message board for club announcements */}
        <ClubPageBoard />

        <ClubPageSidebar
          clubId={clubInfo.clubId}
          isAuthenticated={isAuthenticated}
          userId={user?.userId}
          isMember={clubMembers.some((u) => u.userId === user.userId)}
        />
      </div>
    </>
  );
}
