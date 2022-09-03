import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { List } from "./List";
import "./header.css";

export const Now = () => {
  return (
    <div>
      <div className="digitizeColor">
        digitize
        <font color="CCFF66"> NOW</font>!
      </div>
    </div>
  );
};

export const Ulist = () => {
  const { AuthCtx } = useContext(GlobalContext);

  const { isLogIn } = AuthCtx;

  let links;

  if (!isLogIn) {
    links = [
      { id: 1, text: <Now />, path: "/" },
      { id: 2, text: "contact us ", path: "contact-page" },
      { id: 3, text: "our work ", path: "our-work" },
      // { id: 4, text: "Login Admin ", path: "adminlogin-page" },
    ];
  } else {
    links = [
      { id: 1, text: "digitize NOW ", path: "/" },
      { id: 2, text: "contact us ", path: "contact-page" },
      { id: 3, text: "our work ", path: "our-work" },
      { id: 4, text: "PANEL", path: "control-panel-admin" },
    ];
  }

  return (
    <ul className="Ulist">
      {links.map((link) => {
        return <List key={link.id} text={link.text} path={link.path} />;
      })}
    </ul>
  );
};
