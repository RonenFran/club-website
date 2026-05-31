import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../auth";

export function useUserClubs() {
  const [userClubs, setUserClubs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    axios.get(`/api/user/${user.userId}/clubs`).then((res) => setUserClubs(res.data));
  }, [user]);

  return { userClubs, isAuthenticated: !!user };
}
