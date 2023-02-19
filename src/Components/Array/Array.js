import React from 'react'
import './Array.css'
import ElementArray from '../../Elements/ElementArray'
import Draggable from 'react-draggable';


class Array extends React.Component {
    
  
   render(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    //   const trackPos = (data) => {
    //     setPosition({ x: data.x, y: data.y });
    //  };
    //  const [position, setPosition] = useState({ x: 0, y: 0 });
    console.log(this.props.array);
      var tmp = this.props.array;
      for (var i = 0; i < this.props.array.length; i++) {
        tmp.push(i);
      }
    const indents = tmp.map((i)=><ElementArray value={0} index={i}/>);
    return (
      <div className='Array'>
        {/* w: {w}, h:{h} */}
      <Draggable bounds={{left:10 ,right:w/2.9,top:10,bottom:h/1.7}} handle="#handle" >
        <div style={{width:'100%'}}>
        <img id='handle' src='/drag-indicator.png' alt='pan-icon'/>
        <div className= "draggable">
            {indents}
            <div>
            {/* x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)} */}
            </div>
        </div>
        </div>
        
        

      </Draggable>
      </div>
    );
  }
}


export default Array