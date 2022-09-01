import React, { useState } from "react"
import Box from "./components/Box"
import BoxForm from "./components/BoxForm"
import "./App.css"
import DisplayBoxes from "./components/DisplayBoxes"

const App = () => {
  const [boxes, setBoxes] = useState([])

  const makeBox = (color) => {
    setBoxes(boxes.push(color))
  }

  return (
    <div className="App">
      <BoxForm setBoxes={setBoxes} boxes={boxes} />
      <DisplayBoxes boxes={boxes} />
    </div>
  )
}

export default App
