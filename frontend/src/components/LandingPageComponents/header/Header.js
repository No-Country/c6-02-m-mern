import { ZLogoIcon } from "./ZLogoIcon";
import { CloseIconNav } from "./CloseIconNav";
import { Ulist } from "./Ulist";
import { LogoDigitize } from "./LogoDigitize";
import { HamburgerLogo } from "./HamburgerLogo";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import "./header.css";

export const Header = () => {
  const { isActiveNav } = useContext(GlobalContext);
  return (
    <header className="header">
      <div className="header__wrapper container">
        <LogoDigitize />
        <nav className={!isActiveNav ? "nav" : "nav isActiveNav"}>
          <Ulist />
          <ZLogoIcon />
          <CloseIconNav />
        </nav>
        <HamburgerLogo />
      </div>
    </header>
  );
};
