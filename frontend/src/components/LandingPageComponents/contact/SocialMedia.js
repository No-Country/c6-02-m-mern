import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import './SocialMedia.css';

export const SocialMedia = () => {
  return (
    <ul className="SocialMedia">
      <p className="SocialMedia__description">find us on our social media!</p>
      <li className="SocialMedia__list">
        <TwitterIcon />
        <p className="SocialMedia__type">twitter.com/digitize.ok</p>
      </li>
      <li className="SocialMedia__list">
        <InstagramIcon /> 
        <p className="SocialMedia__type">instagram.com/digitize.ok</p>
      </li>
      <li className="SocialMedia__list">
        <LinkedinIcon />
        <p className="SocialMedia__type">linkedin.com/digitize.ok</p>
      </li>
    </ul>
  );
};
