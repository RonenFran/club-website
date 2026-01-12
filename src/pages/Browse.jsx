import ClubDropdown from "../components/clubDropdown.jsx";
import ClubOptionSelector from "../components/clubOptionSelector.jsx";

function Browse() {
  return (
    <>
      <div className="flex justify-center items-center">
        <ClubDropdown />
        <ClubOptionSelector />
      </div>
    </>
  );
}

export default Browse;
