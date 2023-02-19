import React from "react";
import './DropDownArray.css'

class DropDownArray extends React.Component {
  render(){
  return (
    <div className="DropDownArray">
      <div className="DropDownArray-options" >
        <div className="DropDownArray-option" onClick={()=> this.props.setState({typeOfArray:'Integer'})}>Integer</div>
        <div className="DropDownArray-option" onClick={()=> this.props.setState({typeOfArray:'String'})}>String</div>
        <div className="DropDownArray-option" onClick={()=> this.props.setState({typeOfArray:'Character'})}>Character</div>
        <div className="DropDownArray-option" onClick={()=> this.props.setState({typeOfArray:'Double'})}>Double</div>
        <div className="DropDownArray-option" onClick={()=> this.props.setState({typeOfArray:'Float'})}>Float</div>
      </div>
    </div>
  );
}
}

export default DropDownArray;
