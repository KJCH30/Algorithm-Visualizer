import React from 'react'
import './Array.css'
import ElementArray from '../../Elements/ElementArray'


function Array() {
  // var tmp = [];
  // for (var i = 0; i < this.props.level; i++) {
  //   tmp.push(i);
  // }
  // var indents = tmp.map(function (i) {
  //   return (
  //     <span className='indent'></span>
  //   );
  // });
  
  var tmp = [];
  for (var i = 0; i < 10; i++) {
    tmp.push(i);
  }
  var indents = tmp.map((i)=><ElementArray value={0} index={i}/>);
  
  return (
    <div className='Array'>
        {indents}
    </div>
  )
}

export default Array