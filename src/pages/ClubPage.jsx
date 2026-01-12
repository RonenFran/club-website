import ClubBanner from "../components/clubBanner.jsx";
import ClubBoard from "../components/clubBoard.jsx";
import ClubDescription from "../components/clubDescription.jsx";

function ClubPage() {
  return (
    <>
      {/* Club banner */}
      <ClubBanner />

      <div className="mt-40 h-[180vh]">
        {/* Club description */}
        <ClubBoard />

        {/* Message board for club posts and updates */}
        <div className="relative -top-[155vh] pl-24 pointer-events-none">
          <ClubDescription />
        </div>

        {/* Member list (Potential component)*/}
      </div>
    </>
  );
}

export default ClubPage;
