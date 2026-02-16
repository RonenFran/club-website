import ClubBrowser from "../components/clubBrowser.jsx";
import ClubBrowserOptions from "../components/clubBrowserOptions.jsx";

export default function Browse() {
  return (
    <>
      <div className="flex justify-center items-center">
        <ClubBrowser />
        <ClubBrowserOptions />
      </div>
    </>
  );
}
