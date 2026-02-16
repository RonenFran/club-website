import ClubPageBanner from "../components/clubPageBanner.jsx";
import ClubPageMessages from "../components/clubPageMessages.jsx";
import ClubPageDescription from "../components/clubPageDescription.jsx";

function ClubPage() {
  return (
    <>
      {/* Club banner */}
      <ClubPageBanner />

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

export default ClubPage;
