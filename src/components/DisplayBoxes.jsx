import React, {useState} from 'react'

import Box from './Box'

const DisplayBoxes = (props) => {
  
  return (
    <div className="row row-cols-6 justify-content-center mt-3">
        {props.boxes.map((color, index) => (
          <Box color={color} key={index} />
        ))}
      </div>
  )
}

export default DisplayBoxes