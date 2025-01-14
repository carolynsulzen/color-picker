import { useState } from 'react'
import ColorButton from "./ColorButton";
import PickedColor from "./PickedColor";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <>
      <PickedColor selectedColor = {selectedColor}/>

      <ColorButton colorName = "yellow" setSelectedColor = {setSelectedColor}/>
      <ColorButton colorName = "pink" setSelectedColor = {setSelectedColor}/>
      <ColorButton colorName = "orange" setSelectedColor = {setSelectedColor}/>
    </>
  )
}

export default App
