import React, { useEffect, useState } from "react";
import { Circle } from "./Circle";
import './Progress.css'
import '../NextBack.css'
import { Link, useNavigate } from "react-router-dom";



export const Bar = () => {
    const navigate = useNavigate()
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
        <div className="containera">
               <div className="buttonContainer">

                    <button onClick={() =>{active<=0?setActive(0):setActive(active-1) && navigate('/')}} className="cssButton" disabled = {active>0?false:true} >BACK</button> 
                    <button className="cssButton" disabled = {active>=circle-1?true:false} onClick={() =>{active>=circle?setActive(circle+1):setActive(active+1)}}>NEXT</button> 
                    
                </div>
            <div className="content">
                <div className="progressbar">
                    <div className="progress" style={{width:width+"%"}}></div>
                    {arr}
                </div>
             
            </div>
        </div>
    )
}

