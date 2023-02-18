import React from "react";
import './DropDownArray.css'

function DropDownArray() {
  return (
    <div className="DropDownArray">
      <div className="DropDownArray-options" >
        <div className="DropDownArray-option">Integer</div>
        <div className="DropDownArray-option">String</div>
        <div className="DropDownArray-option">Character</div>
        <div className="DropDownArray-option">Double</div>
        <div className="DropDownArray-option">Float</div>
      </div>
    </div>
  );
}

export default DropDownArray;
