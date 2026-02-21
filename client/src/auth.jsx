import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "./api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser();
  }, []);
}
