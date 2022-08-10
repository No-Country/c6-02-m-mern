import React from 'react';
import { List } from './List';

export const Ulist = ({ setIsActiveNav }) => {
  const links = [
    { id: 1, text: 'digitize ', path: '/' },
    { id: 2, text: 'about ', path: 'about-page' },
    { id: 3, text: 'contact us ', path: 'contact-page' },
  ];

  return (
    <ul className="Ulist">
      {links.map((link) => {
        console.log(link);
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
