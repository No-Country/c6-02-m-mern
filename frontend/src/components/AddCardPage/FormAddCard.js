import React from "react";
import './AddCardPage.css'

const FormAddCard = () => {
  return (
    <div>
      <form className="inputForm">
        <label>Type Card</label>
        <input type="text" placeholder="typecard" name="from_card"></input>

        <label>Include</label>
        <input type="text" placeholder="Include" name="from_include"></input>
        <label>Include</label>
        <input type="text" placeholder="Include" name="from_include"></input>
        <label>Desing</label>
        <input type="text" placeholder="Desing" name="from_desing"></input>
        <div className="class_button">
        <button type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default FormAddCard;
