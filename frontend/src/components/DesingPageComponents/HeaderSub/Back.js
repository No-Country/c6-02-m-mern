import React, { useEffect, useState } from "react";
import '../DownContainer/Bar/Progress.css'
import '../DownContainer/NextBack.css'
import {Circle} from '../DownContainer/Bar/Circle'

export const Back = () => {
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
    return(
       
 
         
        <button className="cssButton" disabled = {active>0?false:true} onClick={() =>{active<=0?setActive(0):setActive(active-1)}}>BACK</button> 

      
 
    )
}