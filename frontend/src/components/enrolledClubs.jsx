import { useState } from "react";
import EnrolledClubItem from "./enrolledClubItem";
import { useUserClubs } from "../hooks/useUserClubs";

export default function EnrolledClubs() {
  const { userClubs } = useUserClubs();

  return (
    <div className="border-4 border-primary rounded-lg h-full w-72 bg-red-100">
      {userClubs.map((club) => (
        <EnrolledClubItem key={club.name} club={club} onUpdate={useUserClubs} />
      ))}
    </div>
  );
}
