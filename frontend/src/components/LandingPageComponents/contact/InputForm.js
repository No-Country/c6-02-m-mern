import React from "react";
import "./input.css";

export const InputForm = () => {
  return (
    <form className="InputForm">
      <label>Full name</label>
      <input type="text" placeholder="Ex: Jhon Black" />
      <label>Mail</label>
      <input type="text" placeholder="Ex: jhonblack01@gmail.com" />
      <label>Leave us your query below</label>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
};
