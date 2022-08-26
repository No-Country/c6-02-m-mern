import React from "react";

import Icono from "../../../assets/images/question.png";
import "./Question.css";

const Question = () => {
  return (
    <div>
      <img src={Icono} className="icono-question" />
    </div>
  );
};

export default Question;
