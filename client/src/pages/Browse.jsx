import ClubBrowser from "../components/clubBrowser.jsx";
import ClubBrowserOptions from "../components/clubBrowserOptions.jsx";

function Browse() {
  return (
    <>
      <div className="flex justify-center items-center">
        <ClubBrowser />
        <ClubBrowserOptions />
      </div>
    </>
  );
}

export default Browse;
