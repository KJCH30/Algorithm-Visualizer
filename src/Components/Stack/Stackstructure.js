import React, { useState } from 'react'
//import Stackupperelements from '../../Elements/Stack/Stackupperelements';
import './Stackstructure.css'
import '../../Elements/Stack/Stackupperelements.css';
import { useRef } from "react";
import { useStackState } from "rooks";
//import Visibility from '../../Component_features/visibility';
//import Pushpopbut from './pushpopbut';


export default function Stackstructure(props){
    const [val,addVal]=useState("");
    
    // const numberToPushRef = useRef(0);
    const [list,{push,pop,peek,length},
         listInReverse] = useStackState([]);
        
    // function addToStack() {
    //     numberToPushRef.current = numberToPushRef.current+1;
    //     push(props.value);
    // }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(val && length<=6){
            push(val)
            addVal("")
        }
    }


  return (
    <div className="maincontainer">
    <div className="stackblock">
       {listInReverse.map((item) => {
                    return <div className='individualstackblock' key={item}>{item}</div>;
                })}
    </div>
    <div className="pushpopbutton">
       <div className='Inputarea'>
        <p1>Enter the element value:</p1>
        <form className="submitarea" onSubmit={handleSubmit}>
        <input type="text" id="inputvalue" value={val} onChange={(e)=>addVal(e.target.value)}/>
        <div className="but"><button onClick={handleSubmit} className="but" id="btn">Push</button></div>
        <div className="but2">
        <button className="butpop2" id="btnpop" onClick={pop}>Pop</button> </div>
        </form>
       </div>
       {/* <p>peek:{peek()}</p>
       <p>length: {length}</p> */}
       {/* <p>length: {length}</p> */}
    </div>
       
    </div>);
}

