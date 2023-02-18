import React from 'react'
import './Panel.css'
import DropDownArray from '../../Array/DropDownArray'

class Panel extends React.Component {
  state = {
    DropDownArray:false
  }

  handleDropDownArray(){
    console.log(this.state.DropDownArray)
    this.setState({DropDownArray:!this.state.DropDownArray});
  }
  render(){
    
    return (
      <div className='Panel'>
          <div className='Panel-Section-1'>
            <div className='Panel-Array'>
              <button id='Array-option-button' onClick={()=>this.handleDropDownArray()}>Array</button>
              {console.log(this.state.DropDownArray)}
              {this.state.DropDownArray && (<DropDownArray/>)}
            </div>
          </div>
          {/* <DropDownArray/> */}
      </div>
    )
  }
}

export default Panel