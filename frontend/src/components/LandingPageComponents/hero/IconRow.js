import React from "react";
import "./iconRowDown.css";
export const IconRow = () => {
  const toGoDiscoverSection = () => {
    console.log("disparando");
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="wrapper-iconRow" onClick={toGoDiscoverSection}>
      <svg
        width="73"
        height="73"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-row-down"
      >
        <path
          d="M36.5 0C16.3395 0 0 16.3395 0 36.5C0 56.6605 16.3395 73 36.5 73C56.6605 73 73 56.6605 73 36.5C73 16.3395 56.6605 0 36.5 0ZM55.691 35.1598L39.7223 51.1285C38.8383 52.0268 37.6691 52.4688 36.5 52.4688C35.3309 52.4688 34.1646 52.0232 33.2749 51.1321L17.3061 35.1633C15.5239 33.3811 15.5239 30.4939 17.3061 28.7117C19.0884 26.9294 21.9756 26.9294 23.7578 28.7117L36.5 41.4617L49.2436 28.7181C51.0259 26.9359 53.9131 26.9359 55.6953 28.7181C57.4775 30.5003 57.4732 33.3775 55.691 35.1598Z"
          // fill="#210124"
          fill="#ffffff"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
};
