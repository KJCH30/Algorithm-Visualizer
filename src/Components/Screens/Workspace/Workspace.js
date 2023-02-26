import React,{useState} from 'react'
import './Workspace.css'
import Array from '../../Array/Array'
import Stackstructure from '../../Stack/Stackstructure'

function Workspace(props){
  const[arr,setArray] = useState([])

  const createNewArray=()=>{
    props.setState({
      ...props.state,
      typeOfArray:null,
    })
    var arrayToAdd = [];
    for(var i=0; i<Math.min(props.lengthOfArray,10); i++){
      arrayToAdd.push(0);
    }
    arr.arrays.push(arrayToAdd)
    console.log("kuch ho raha hai")
    console.log(props.typeOfArray)
    console.log(props.lengthOfArray)
  }

  // const createNewStack=()=>{
  //   props.setState({
  //     ...props.state,
  //     typeOfStack:null
  //   })
  //   console.log("kuch bhi "+console.log(props.typeOfStack))
  // }
    
  return (
    <div className='Workspace'>
        Workspace Section
        {console.log("hg "+props.typeOfStack)}
        {console.log(props.lengthOfArray)}
        {props.typeOfArray!==null && props.lengthOfArray>0 && createNewArray()}
        {console.log("Array: "+arr.arrays)}
        {arr.map((array)=><Array array={array}/>)}
        {props.typeOfStack!==null && <Stackstructure/>}
        {/* {this.createNewStack()} */}
        {console.log("at end "+props.typeOfStack)}
        {console.log("at end array "+props.typeOfArray)}

    </div>
        
  )
}

export default Workspace