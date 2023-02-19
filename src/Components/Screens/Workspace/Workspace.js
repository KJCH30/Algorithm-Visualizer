import React from 'react'
import './Workspace.css'
import Array from '../../Array/Array'

class Workspace extends React.Component {
    state = {
      
    }

    DataStructures = {
      arrays : []
    }
  

  createNewArray=()=>{
    this.props.setState({
      ...this.props.state,
      typeOfArray:null
    })
    var arrayToAdd = [];
    for(var i=0; i<Math.min(this.props.lengthOfArray,10); i++){
      arrayToAdd.push(0);
    }
    this.DataStructures.arrays.push(arrayToAdd)
    console.log("kuch ho raha hai")
    console.log(this.props.typeOfArray)
    console.log(this.props.lengthOfArray)
    
    
  }
  render(){
    
  return (
    <div className='Workspace'>
        Workspace Section
        {console.log(this.props.lengthOfArray)}
        {this.props.typeOfArray!==null && this.createNewArray()}
        {console.log("Array: "+this.DataStructures.arrays)}
        {this.DataStructures.arrays.map((array)=><Array array={array}/>)}
    </div>
        
  )
}
}

export default Workspace