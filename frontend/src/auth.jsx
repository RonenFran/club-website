import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "./api";

const AuthContext = createContext(null);

// Retrieiving user from server with API call
export async function getUser() {
  const response = await axios.get("/api/auth/me");
  return response.data;
}

// Logging out user and destroy cookie
export async function logoutUser() {
  return axios
    .post("/api/auth/logout")
    .then(() => ({ ok: true }))
    .catch(() => ({ ok: false }));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function refreshUser() {
    const data = await getUser();
    setUser(data);
    return data;
  }

  async function signout() {
    await logoutUser();
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated: !!user,
      refreshUser,
      signout,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
