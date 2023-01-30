import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(
    sessionStorage.user !== "undefined"
      ? JSON.parse(sessionStorage.getItem("user"))
      : null
  );

  const handleUser = (data,mail) => {
    setUser({data, mail});
  };

  const logout = () => {
    setUser();
    sessionStorage.removeItem("user");
  };

  const updateUserProfil = () => {
    setUser({ ...user, profil: true });
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        handleUser,
        updateUserProfil,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default {
  UserContext,
  UserProvider,
};
