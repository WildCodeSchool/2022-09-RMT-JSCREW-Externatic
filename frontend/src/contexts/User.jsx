import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const handleUser = (data) => {
    setUser(data);
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
