import React, { useEffect, useState } from "react";
import { Circle } from "./Circle";
import './Progress.css'
import '../NextBack.css'




export const Bar = (Back) => {
    
    const[circle] = useState(3);
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(100/(circle-1)*active);
    },[circle,active]);
    const arr=[]
    for (let i = 0; i < circle; i++) {
           arr.push( <Circle className={i<=active?"circle active":"circle"} key={i}>{i}</Circle>) 
    }
    const handlerButtonBack = () => {
        active<=0?setActive(0):setActive(active-1)
        if(active <= 0){
            setActive(0)
        } else {
            setActive(active-1)
        }
    }

    const handlerButtonNext = () => {
        if(active >= circle) {
            setActive(circle+1)
        } else {
            setActive(active+1)
        }
    }

    return(
        
                <div className="buttonContainer">

                    <button onClick={handlerButtonBack} className="cssButton" disabled = {active>0?false:true} >BACK</button> 
                    
                        <div className="progressbar">
                            <div className="progress" style={{width:width+"%"}}></div>
                                {arr}
                        </div>
                    <button onClick={handlerButtonNext}  className="cssButton" disabled = {active>=circle-1?true:false} >NEXT</button> 

                </div>
           
              
            
      
    )
}

