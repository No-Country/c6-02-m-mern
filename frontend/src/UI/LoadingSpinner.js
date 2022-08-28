import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="LoadingSpinner">
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default LoadingSpinner;
