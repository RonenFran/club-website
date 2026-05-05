import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import axios from "axios";
import EnrolledClubItem from "./enrolledClubItem";

export default function EnrolledClubs() {
  const [clubs, setClubs] = useState([]);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!user) return;
    console.log(user);

    const fetchClubs = async () => {
      const res = await axios.get(`/api/myclubs/${user.userId}`);
      console.log(res.data);
      setClubs(res.data);
    };

    fetchClubs();
  }, [user]);

  return (
    <div className="border-4 border-primary rounded-lg h-full w-72 bg-red-100">
      {clubs.map((club) => (
        <EnrolledClubItem key={club.name} club={club} />
      ))}
    </div>
  );
}
