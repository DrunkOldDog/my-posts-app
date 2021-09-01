import { createContext, useContext, useEffect, useState } from "react";

import {
  auth,
  init,
  logIn as authLogIn,
  logOut as authLogOut,
} from "../lib/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    init(setUser);
    auth.on("login", setUser);

    return () => {
      auth.off("login", setUser);
    };
  }, []);

  function logIn() {
    authLogIn(setUser);
  }

  function logOut() {
    authLogOut(setUser);
  }

  const contextValue = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
