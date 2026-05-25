import ClubBrowser from "../components/clubBrowser.jsx";
import ClubBrowserOptions from "../components/clubBrowserOptions.jsx";
import SearchBar from "../components/searchBar.jsx";

export default function Browse() {
  return (
    <>
      <div className="bg-secondary">
        <SearchBar />
        <ClubBrowser />
        {/* <ClubBrowserOptions /> */}
      </div>
    </>
  );
}
