import React from 'react'
import './ElementArray.css'


function ElementArray(props) {
  return (
        <div className='ElementArray'>
            <p id='ElementArray_value'> <input type="number" inputmode="numeric" autocomplete="off" id="array-value" name="array-value" placeholder='0'/></p>
            <p id="ElementArray_index">{props.index}</p>
        </div>
      
  )
}

export default ElementArray