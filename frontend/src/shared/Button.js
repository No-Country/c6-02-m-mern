import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button-auth button--${props.size || "default"} ${
          props.inverse && "button-auth--inverse"
        } ${props.danger && "button-auth--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button-auth button-auth--${props.size || "default"} ${
          props.inverse && "button-auth--inverse"
        } ${props.danger && "button-auth--danger"}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button-auth button-auth--${props.size || "default"} ${
        props.inverse && "button-auth--inverse"
      } ${props.danger && "button-auth--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
