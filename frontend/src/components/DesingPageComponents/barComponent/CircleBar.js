import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

import "./circleBar.css";
export const CircleBar = () => {
  const { UIstate } = useContext(GlobalContext);

  console.log(UIstate.isCardActive);
  return (
    <div className="CircleBar">
      <div
        className={`CircleBar__Circle ${
          UIstate.isCardActive && "activeCircle"
        }`}
      >
        1
      </div>
      <div className="CircleBar__Linie "></div>
      <div className="CircleBar__Circle">2</div>
      <div className="CircleBar__Linie"></div>
      <div className="CircleBar__Circle">3</div>
    </div>
  );
};
