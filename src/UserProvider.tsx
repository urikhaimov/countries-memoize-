import { createContext, useState, useEffect, ReactNode } from "react";

type UserContextType = {
  countries: Array<Object>;
  setCountries: (value: Array<Object>) => void;
};
const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};
export const UserProvider = ({ children }: Props) => {
  const [countries, setCountries] = useState([{}]);

  useEffect(() => {
    // We'd get the countries from a web API / local storage.

  }, []);

  return (
    <UserContext.Provider value={{ countries, setCountries }} >
      {children}
    </UserContext.Provider>
  );
};