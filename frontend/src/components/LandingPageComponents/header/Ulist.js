import React from "react";
import { List } from "./List";

export const Ulist = ({ setIsActiveNav }) => {
  const links = [
    { id: 1, text: "digitize ", path: "/" },
    { id: 2, text: "ONLY ADMIN ", path: "adminlogin-page" },
    { id: 3, text: "contact us ", path: "contact-page" },
  ];

  return (
    <ul className="Ulist">
      {links.map((link) => {
        return (
          <List
            key={link.id}
            text={link.text}
            setIsActiveNav={setIsActiveNav}
            path={link.path}
          />
        );
      })}
    </ul>
  );
};
