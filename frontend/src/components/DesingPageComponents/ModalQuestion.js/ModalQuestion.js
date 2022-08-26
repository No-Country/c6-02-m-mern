import React, { useContext } from "react";
import svgImageClose from "../../../assets/images/closeModalIcon.svg";
import { GlobalContext } from "../../../context/GlobalContext";

import "./ModalQuestion.css";
export const ModalQuestion = (props) => {
  const { isModalActive, setisModalActive } = useContext(GlobalContext);

  const handlerCloseModal = () => {
    setisModalActive(false);
  };
  return (
    <div
      className={`${isModalActive ? "ModalQuestion active" : "ModalQuestion"}`}
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
