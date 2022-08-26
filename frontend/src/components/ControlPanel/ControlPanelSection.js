import React from "react";
import "./controlPanelSection.css";
import EditIcon from "../../assets/images/EditIcon.svg";
import DeleteIcon from "../../assets/images/DeleteIcon.svg";
import PlusIcon from "../../assets/images/PlusIcon.svg";

export const ControlPanelSection = (props) => {
  return (
    <div className="controlPanelSection">
      <div className="controlPanelSection__firstColum">
        <div className="controlPanelSection__firstColum__btn">
          {props.typePack}
        </div>
        <p className="controlPanelSection__firstColum__paragraph">
          {props.firstCardTitletype}
        </p>

        <p className="controlPanelSection__firstColum__paragraph">
          {props.secondCardTitletype}
        </p>

        <p className="controlPanelSection__firstColum__paragraph">
          {props.thirdCardTitletype}
        </p>
      </div>
      <div className="controlPanelSection__SecondColum">
        <div className="controlPanelSection__SecondColum__add">
          <span>ADD</span>
          <img
            src={PlusIcon}
            className="controlPanelSection__SecondColum__add__image"
          />
        </div>
        <div className="wrapper-icons">
          <div className="wrapper-icons__edit">
            <img src={EditIcon} />
            <span>EDIT</span>
          </div>
          <div className="wrapper-icons__delete">
            <img src={DeleteIcon} />
            <span>DELETE</span>
          </div>
        </div>

        <div className="wrapper-icons">
          <div className="wrapper-icons__edit">
            <img src={EditIcon} />
            <span>EDIT</span>
          </div>
          <div className="wrapper-icons__delete">
            <img src={DeleteIcon} />
            <span>DELETE</span>
          </div>
        </div>

        <div className="wrapper-icons">
          <div className="wrapper-icons__edit">
            <img src={EditIcon} />
            <span>EDIT</span>
          </div>
          <div className="wrapper-icons__delete">
            <img src={DeleteIcon} />
            <span>DELETE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
