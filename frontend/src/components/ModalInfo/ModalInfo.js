import React, { useContext } from "react";
import svgImageClose from "../../assets/images/closeModalIcon.svg";
import { GlobalContext } from "../../context/GlobalContext";
import "./ModalInfo.css";

const ModalInfo = ({ title, parrafo }) => {
  const { UIstate } = useContext(GlobalContext);

  const handlerCloseModal = () => {
    UIstate.setisModalActive(false);
  };
  return (
    <div
      className={`${UIstate.isModalActive ? "ModalInfo active" : "ModalInfo"}`}
    >
      <img
        src={svgImageClose}
        alt="modalIconClose"
        className="ModalInfo__icon"
        onClick={handlerCloseModal}
      />
      <h4 className="ModalInfo__title">
        {title} <span>Successfully</span>
      </h4>
      <p className="ModalInfo__parrafo">{parrafo}</p>
    </div>
  );
};

export default ModalInfo;
