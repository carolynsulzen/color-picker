const ColorButton = (props)=>{

  return(
    <>
    <button onClick={ () => {props.setSelectedColor(props.colorName)}}>{props.colorName}</button>
    </>
  )
}
export default ColorButton;