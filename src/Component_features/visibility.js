
import React, { Component } from "react";

class Visibility extends React.Component {

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
    
    render() {
        if (this.state.isActive) {
            return (
              <div>
                <h1>Hello react</h1>
                <button onClick={this.handleHide}>Hide</button>
              </div>
            );
          } else {
            return (
              <div>
                <button onClick={this.handleShow}>Show</button>
              </div>
            );
          }
    }
}

export default Visibility
