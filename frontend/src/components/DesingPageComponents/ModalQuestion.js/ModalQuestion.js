import React, { useContext } from "react";
import svgImageClose from "../../../assets/images/closeModalIcon.svg";
import { GlobalContext } from "../../../context/GlobalContext";

import "./ModalQuestion.css";
export const ModalQuestion = (props) => {
  const { UIstate } = useContext(GlobalContext);

  const handlerCloseModal = () => {
    UIstate.setisModalActive(false);
  };
  return (
    <div
      className={`${
        UIstate.isModalActive ? "ModalQuestion active" : "ModalQuestion"
      }`}
    >
      <img
        src={svgImageClose}
        alt="modalIconClose"
        className="ModalQuestion__icon"
        onClick={handlerCloseModal}
      />
      <p className="ModalQuestion__paragraph">{props.content}</p>
    </div>
  );
};
