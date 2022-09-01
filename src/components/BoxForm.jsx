import React, {useState} from 'react'

const BoxForm = (props) => {

  const [color, setColor] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setColor(value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    props.setBoxes([...props.boxes, color])
  }

  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <form>
          <label htmlFor="color">Color:</label>
          <input type="text" name="color" value={color} onChange={handleChange}/>
          <button className="btn btn-primary" onClick={handleClick}>Add Box</button>
        </form>
      </div>
    </div>
  )
}

export default BoxForm