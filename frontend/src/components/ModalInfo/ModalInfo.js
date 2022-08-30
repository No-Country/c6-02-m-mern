import React, { useContext } from "react";
import svgImageClose from "../../assets/images/closeModalIcon.svg";
import { GlobalContext } from "../../context/GlobalContext";

import "./ModalInfo.css";

const ModalInfo = (props) => {
  const { UIstate } = useContext(GlobalContext);

  const handlerCloseModal = () => {
    UIstate.setisModalActive(false);
  };
  return (
    <div
      className={`${
        UIstate.isModalActive ? "ModalInfo active" : "ModalInfo"
      }`}
    >
      <img
        src={svgImageClose}
        alt="modalIconClose"
        className="ModalQuestion__icon"
        onClick={handlerCloseModal}
      />
      <p className="ModalInfo__icon">{props.content}</p>
    </div>
  );
};

export default ModalInfo