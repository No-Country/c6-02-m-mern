import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

export const CloseIconNav = () => {
  const { UIstate } = useContext(GlobalContext);
  const handlerCloseNav = () => {
    UIstate.setIsActiveNav(false);
  };
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="close-icon-nav"
      onClick={handlerCloseNav}
    >
      <g clipPath="url(#clip0_180_1685)">
        <path
          d="M16.7334 16.3379C16.7334 16.4453 16.6455 16.5332 16.5381 16.5332L14.9268 16.5259L12.5 13.6328L10.0757 16.5234L8.46191 16.5308C8.35449 16.5308 8.2666 16.4453 8.2666 16.3354C8.2666 16.2891 8.28369 16.2451 8.31299 16.2085L11.4893 12.4243L8.31299 8.64258C8.28349 8.6068 8.26712 8.562 8.2666 8.51562C8.2666 8.4082 8.35449 8.32031 8.46191 8.32031L10.0757 8.32764L12.5 11.2207L14.9243 8.33008L16.5356 8.32275C16.6431 8.32275 16.731 8.4082 16.731 8.51807C16.731 8.56445 16.7139 8.6084 16.6846 8.64502L13.5132 12.4268L16.6895 16.2109C16.7188 16.2451 16.7334 16.2915 16.7334 16.3379Z"
          fill="#05668D"
        />
        <g filter="url(#filter0_d_180_1685)">
          <path
            d="M12.5 23.4131C6.45996 23.4131 1.5625 18.5156 1.5625 12.4756C1.5625 6.43555 6.45996 1.53809 12.5 1.53809C18.54 1.53809 23.4375 6.43555 23.4375 12.4756C23.4375 18.5156 18.54 23.4131 12.5 23.4131ZM12.5 3.39355C7.48535 3.39355 3.41797 7.46094 3.41797 12.4756C3.41797 17.4902 7.48535 21.5576 12.5 21.5576C17.5146 21.5576 21.582 17.4902 21.582 12.4756C21.582 7.46094 17.5146 3.39355 12.5 3.39355Z"
            fill="#05668D"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_180_1685"
          x="-1.4375"
          y="0.538086"
          width="27.875"
          height="27.875"
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
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0196078 0 0 0 0 0.4 0 0 0 0 0.552941 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_180_1685"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_180_1685"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_180_1685">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="matrix(1 0 0 -1 0 25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
