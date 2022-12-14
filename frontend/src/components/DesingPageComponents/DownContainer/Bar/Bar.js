import React, { useEffect, useState } from "react";
import { Circle } from "./Circle";
import "./Progress.css";
import "../NextBack.css";
import { Link } from "react-router-dom";

export const Bar = (props) => {
  const [circle] = useState(4);
  const [active, setActive] = useState(props.circleActive);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((100 / (circle - 1)) * active);
  }, [circle, active]);
  const arr = [];
  for (let i = 1; i < circle; i++) {
    arr.push(
      <Circle className={i <= active ? "circle active" : "circle"} key={i}>
        {i}
      </Circle>
    );
  }
  const handlerButtonBack = () => {
    active <= 0 ? setActive(0) : setActive(active - 1);
    if (active <= 0) {
      setActive(0);
    } else {
      setActive(active - 1);
    }
  };

  const handlerButtonNext = () => {
    if (active >= circle) {
      setActive(circle + 1);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div className="containerDown">
      <div className="buttonContainer">
        <div className="subuttonContainer">
          <Link to={props.pathbtn1} className="linkButtonOneContainer">
            <div className="containercssButton">
              <button
                onClick={handlerButtonBack}
                className="cssButton"
                disabled={active > 0 ? false : true}
              >
                {props.btn1Content}
              </button>
            </div>
          </Link>
          {props.activebtn && (
            <Link to={props.pathbtn2} className="linkButtonTwoContainer">
              <div className="containercssButtonNext">
                <button
                  onClick={handlerButtonNext}
                  className={`cssButtonNext ${props.activebtn && "active"}`}
                >
                  {props.btn2Content}
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="containerBar">
        <div className="progressbar">
          <div className="progress" style={{ width: width + "%" }}></div>
          <div className="circleContainer">{arr}</div>
        </div>
      </div>
    </div> /*a*/
  );
};
