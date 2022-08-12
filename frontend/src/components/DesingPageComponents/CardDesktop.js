import React from "react";
import './CardDesktop.css'
import Card from "./Cards/Card";

const CardDesktop = () => {
  return (
  
      <div className="flex-container">
      <Card titulo={'Bronce'} />
      <Card titulo={'Silver'}/>
      <Card titulo={'Gold'}/>

        
        
      </div>
 
  );
};

export default CardDesktop;
