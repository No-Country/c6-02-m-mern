import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({ children }) => {
  const [isActiveNav, setIsActiveNav] = useState(false);
  const [isModalActive, setisModalActive] = useState(false);

  const UIstate = {
    isActiveNav,
    setIsActiveNav,
    isModalActive,
    setisModalActive,
  };

  return (
    <GlobalContext.Provider value={{ UIstate }}>
      {children}
    </GlobalContext.Provider>
  );
};
