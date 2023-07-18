import { ReactElement, createContext, useState, FC } from "react";

type UserContextProps = {
  children: ReactElement;
};

export const UserContext = createContext({});

export const UserProvider: FC<UserContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
