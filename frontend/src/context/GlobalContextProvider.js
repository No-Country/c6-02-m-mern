import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  return (
    <GlobalContext.Provider value={{ isActiveNav, setIsActiveNav }}>
      {children}
    </GlobalContext.Provider>
  );
};
