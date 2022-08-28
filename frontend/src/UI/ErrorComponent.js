import React from "react";
import "./errorComponent.css";

export const ErrorComponent = (props) => {
  return (
    <div className="ErrorComponent">
      <p className="ErrorComponent__paragraph">{props.messageError}</p>
    </div>
  );
};
