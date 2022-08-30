import React from "react";
import "./Titulo.css";

const Titulo = (props) => {
  return (
    <div className="class-title">
      <h1 className="class-title--yellow">{props.title}</h1>
      <p className="class-parrafo">{props.description}</p>
    </div> 
  ); 
};

export default Titulo;
