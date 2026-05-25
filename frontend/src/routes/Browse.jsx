import ClubBrowserList from "../components/clubBrowserList.jsx";
import ClubBrowserOptions from "../components/clubBrowserOptions.jsx";
import SearchBar from "../components/searchBar.jsx";

export default function Browse() {
  return (
    <>
      <div className="bg-secondary flex">
        <ClubBrowserOptions />
        <div className="flex-1">
          <SearchBar />
          <ClubBrowserList />
        </div>
      </div>
    </>
  );
}
