import React, { Component } from "react";
import addToStack from "./Stackstructure";
import { useStackState } from "rooks";
import { useRef } from "react";
import Stackstructure from "./Stackstructure";

class Pushpopbut extends React.Component {

    state = {
        isActive: false
      };
    
      handleShow = () => {
        this.setState({
          isActive: true
        });
      };
    
      handleHide = () => {
        this.setState({
          isActive: false
        });
      };



    //  addToStack=()=> {
    //     // numberToPushRef.current = numberToPushRef.current+1;
    //     this.props.list.(58);
    //     console.log(this.props.list);
    // }
    
    render() {
        if (this.state.isActive) {
            return (
            <div className="maincontainer">
              <div className="buttons">
                <button onClick={this.handleShow}>Push</button>
              </div>
              <div>
                <div className="enteringarea">
                    <h3>Enter the element value:</h3>
                    <input type="text" id="elementvalue" name="elementvalue"/>
                    <button onClick={()=>addToStack()}>Push</button>
                </div>
              </div>
              </div>
            );
          } else {
            return (
              <div>
                <button onClick={this.handleShow}>Push</button>
              </div>
            );
          }
    }
}

export default Pushpopbut
