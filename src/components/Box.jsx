import React from 'react'

const Box = (props) => {

  return (
    <div className='col rounded-2' style={{
      backgroundColor: props.color,
      width: "100px",
      height: "100px"
    }}>Im a Box!</div>
  )
}

export default Box