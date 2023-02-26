import React from "react";
import "./Array.css";
import ElementArray from "../../Elements/ElementArray";
import Draggable from "react-draggable";

function Array({ array }) {
  console.log(array);
  const indents = array.map((i,index) => <ElementArray value={0} index={index} />);
  return (
    <Draggable handle="#handle" bounds={{ left: 0,}}>
      <div className="Array">
        <div style={{width: "100%" }}>
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <div className="draggable">
            {indents}
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default Array;
