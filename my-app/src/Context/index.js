import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [account, setAccount] = useState();

  return (
    <UserContext.Provider value={[account, setAccount]}>
      {children}
    </UserContext.Provider>
  );
};
