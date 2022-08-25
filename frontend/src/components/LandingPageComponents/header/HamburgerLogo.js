import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const HamburgerLogo = () => {
  const { setIsActiveNav } = useContext(GlobalContext);
  const handlerHamburger = () => {
    setIsActiveNav(true);
  };
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__hamburger"
      onClick={handlerHamburger}
    >
      <g clipPath="url(#clip0_180_1784)">
        <path
          d="M11.6667 10.1836C11.2799 10.1836 10.909 10.3372 10.6355 10.6107C10.362 10.8842 10.2084 11.2552 10.2084 11.6419C10.2084 12.0287 10.362 12.3996 10.6355 12.6731C10.909 12.9466 11.2799 13.1003 11.6667 13.1003H23.3334C23.7201 13.1003 24.0911 12.9466 24.3646 12.6731C24.6381 12.3996 24.7917 12.0287 24.7917 11.6419C24.7917 11.2552 24.6381 10.8842 24.3646 10.6107C24.0911 10.3372 23.7201 10.1836 23.3334 10.1836H11.6667V10.1836ZM10.2084 17.5001C10.2084 17.1133 10.362 16.7423 10.6355 16.4689C10.909 16.1954 11.2799 16.0417 11.6667 16.0417H23.3334C23.7201 16.0417 24.0911 16.1954 24.3646 16.4689C24.6381 16.7423 24.7917 17.1133 24.7917 17.5001C24.7917 17.8868 24.6381 18.2578 24.3646 18.5312C24.0911 18.8047 23.7201 18.9584 23.3334 18.9584H11.6667C11.2799 18.9584 10.909 18.8047 10.6355 18.5312C10.362 18.2578 10.2084 17.8868 10.2084 17.5001ZM11.6667 21.8998C11.2799 21.8998 10.909 22.0535 10.6355 22.327C10.362 22.6005 10.2084 22.9714 10.2084 23.3582C10.2084 23.745 10.362 24.1159 10.6355 24.3894C10.909 24.6629 11.2799 24.8165 11.6667 24.8165H23.3334C23.7201 24.8165 24.0911 24.6629 24.3646 24.3894C24.6381 24.1159 24.7917 23.745 24.7917 23.3582C24.7917 22.9714 24.6381 22.6005 24.3646 22.327C24.0911 22.0535 23.7201 21.8998 23.3334 21.8998H11.6667Z"
          fill="#05668D"
        />
        <g filter="url(#filter0_d_180_1784)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.0834 17.4998C32.0834 25.5542 25.5544 32.0832 17.5 32.0832C9.44565 32.0832 2.91669 25.5542 2.91669 17.4998C2.91669 9.44546 9.44565 2.9165 17.5 2.9165C25.5544 2.9165 32.0834 9.44546 32.0834 17.4998ZM29.1667 17.4998C29.1667 20.594 27.9375 23.5615 25.7496 25.7494C23.5617 27.9373 20.5942 29.1665 17.5 29.1665C14.4058 29.1665 11.4384 27.9373 9.25044 25.7494C7.06252 23.5615 5.83335 20.594 5.83335 17.4998C5.83335 14.4056 7.06252 11.4382 9.25044 9.25026C11.4384 7.06233 14.4058 5.83317 17.5 5.83317C20.5942 5.83317 23.5617 7.06233 25.7496 9.25026C27.9375 11.4382 29.1667 14.4056 29.1667 17.4998V17.4998Z"
            fill="#05668D"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_180_1784"
          x="-3.08331"
          y="-0.0834961"
          width="41.1667"
          height="41.1665"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0196078 0 0 0 0 0.4 0 0 0 0 0.552941 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_180_1784"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_180_1784"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_180_1784">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
