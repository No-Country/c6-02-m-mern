import React from "react";
import { List } from "../../LandingPageComponents/header/List";

export const Ulista = () => {
  const links = [
    { id: 1, text: "digitize ", path: "/" },
    { id: 2, text: "about ", path: "about-page" },
    { id: 3, text: "contact us ", path: "contact-page" },
  ];

  return (
    <ul className="Ulista">
      {links.map((link) => {
        return <List key={link.id} text={link.text} path={link.path} />;
      })}
    </ul>
  );
};
