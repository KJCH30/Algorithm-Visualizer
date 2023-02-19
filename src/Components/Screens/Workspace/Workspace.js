import React from 'react'
import './Workspace.css'
import Array from '../../Array/Array'

class Workspace extends React.Component {
    state = {
      showArray : false,
    }
  

  // const createNewArray=()=>{
  //   ;
    
  // }
  render(){
    let DataStructures = {
      arrays : []
    }
  return (
    <div className='Workspace'>
        Workspace Section
        {/* {console.log(props.typeOfArray)} */}
        {this.props.typeOfArray!==null?(<>
          {DataStructures.arrays.push([1,2,3])}
          {this.state.showArray=true}
          {console.log("kuch ho raha hai")}
          {this.props.setState({typeOfArray:null})}
        </>):(<></>)}

        {this.state.showArray && <Array array={DataStructures.arrays[0]}/>}
        
    </div>
        
  )
}
}

export default Workspace