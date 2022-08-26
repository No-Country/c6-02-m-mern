import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isModalActive, setisModalActive] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ isActiveNav, setIsActiveNav, isModalActive, setisModalActive }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
