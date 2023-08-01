import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // call this function when you want to authenticate the user
  const login = user => {
    console.log(user, "data");
    setUser(user);
        //navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    // navigate("/", { replace: true });
  };

  // const value = useMemo(
  //   () => ({
  //     user,
  //     login,
  //     logout
  //   }),
  //   [login, logout, user]
  // );
  return <AuthContext.Provider value={{user, login, logout} }>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};