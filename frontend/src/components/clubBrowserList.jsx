import ClubBrowserItem from "./clubBrowserItem";

export default function ClubBrowserList({ clubs }) {
  return (
    <>
      {/* Dropdown container */}
      <div className="flex flex-col m-8">
        {clubs.map((club) => (
          <ClubBrowserItem key={club.clubId} club={club} />
        ))}
      </div>
    </>
  );
}
