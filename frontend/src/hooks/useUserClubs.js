import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../auth";

export function useUserClubs() {
  const [userClubs, setUserClubs] = useState([]);
  const [clubsLoading, setClubsLoading] = useState(true);
  const { user, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    // Check if user data has been loaded yet
    if (loading) return;
    // No user logged in
    if (!user) {
      setClubsLoading(false);
      return;
    }
    // User logged in and now must retrieve the user's clubs
    axios.get(`/api/user/${user.userId}/clubs`).then((res) => {
      setUserClubs(res.data);
      // Signals that the previous API call is complete and userClubs is set
      setClubsLoading(false);
    });
  }, [user, loading]);

  return { userClubs, isAuthenticated, user, loading: loading || clubsLoading };
}
