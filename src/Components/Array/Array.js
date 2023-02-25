import React, { useEffect } from "react";
import "./Array.css";
import ElementArray from "../../Elements/ElementArray";
import Draggable from "react-draggable";

function Array(props) {
  // componentDidMount() {
  //   this.indents = this.props.array.map((i, index) => (
  //     <ElementArray value={i} index={index} array={this.props.array} />
  //   ));
  // }
  // componentDidUpdate(){
  //   console.log(this.props.array.length)
  var indents = props.array.map((i, index) => (
    <ElementArray value={i} index={index} array={props.array} />
  ))
  useEffect(() => {
    console.log("teri maa ki")
    indents = props.array.map((i, index) => (
      <ElementArray value={i} index={index} array={props.array} />
    )) 
  }) 
  // useEffect(){
    
  // }
     
  // }
  const sortArray = () => {
    props.array.sort((a, b) => a - b);
    // <Array array={this.props.array}/>
    // console.log(typeof this.props.array[0]);
    // this.handleValueChange()
    // this.forceUpdate();
    
    console.log(props.array);

    // props.setState({updateSortArray:false})
  };

  const makeTure = () => {
    this.setState({ updateSortArray: true });
  };
  // var indents =
  return (
    <Draggable handle="#handle" bounds={{ left: 0 }}>
      <div className="Array">
        {true && console.log("Mein ")}
        <div className="Array-manipulate-options" style={{ width: "100%" }}>
          <img id="handle" src="/drag-indicator.png" alt="pan-icon" />
          <button id="handle-sort" onClick={sortArray}>
            Sort
          </button>
        </div>
        <div className="draggable">
          {console.log(props.array)}
          {indents}
        </div>
      </div>
    </Draggable>
  );
}

export default Array;
