import Navbar from "./components/navbar.jsx";
import ClubBanner from "./components/clubBanner.jsx";
import ClubBoard from "./components/clubBoard.jsx";
import ClubDescription from "./components/clubDescription.jsx";

function ClubPage() {
  return (
    <>
      {/* Navigation Board */}
      <Navbar className="z-50" />

      {/* Club banner */}
      <ClubBanner />

      <div className="my-40">
        {/* Club description */}
        <ClubBoard />

        {/* Message board for club posts and updates */}
        <div className="relative -top-[155vh] left-24">
          <ClubDescription />
        </div>

        {/* Member list (Potential component)*/}
      </div>
    </>
  );
}

export default ClubPage;
