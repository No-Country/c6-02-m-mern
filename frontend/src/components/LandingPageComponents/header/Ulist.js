import React from "react";
import { List } from "./List";

export const Ulist = () => {
  const links = [
    { id: 1, text: "digitize ", path: "/" },
    { id: 3, text: "contact us ", path: "contact-page" },
    { id: 2, text: "ADMIN ", path: "adminlogin-page" },
  ];

  return (
    <ul className="Ulist">
      {links.map((link) => {
        return <List key={link.id} text={link.text} path={link.path} />;
      })}
    </ul>
  );
};
