import React, { useContext } from "react";
import Icono from "../../../assets/images/question.png";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Question.css";

const Question = () => {
  const { UIstate } = useContext(GlobalContext);

  const handlerModalOpen = () => {
    UIstate.setisModalActive(true);
  };
  return (
    <div>
      <img src={Icono} className="icono-question" onClick={handlerModalOpen} />
    </div>
  );
};

export default Question;
