import React from 'react'
import './ElementArray.css'

function ElementArray(props) {
  return (
    <div className='ElementArray'>
        <p id='ElementArray_value'>{props.value}</p>
        <p id="ElementArray_index">{props.index}</p>
    </div>
  )
}

export default ElementArray