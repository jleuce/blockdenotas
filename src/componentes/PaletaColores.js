import React from 'react'

export default function PaletaColores(props) {
  
    function handleClick(color) {
      console.log('clickColor',color);
      console.log(props);
      props.elegirColorPaletaHandler(color);
    }
  return (
    <div className="color-palette">
      <div className="color-item"  onClick={() => handleClick("#F94144")} style={{ backgroundColor: "#F94144" }}></div>
      <div className="color-item"  onClick={() => handleClick("#F8961E")} style={{ backgroundColor: "#F8961E" }}></div>
      <div className="color-item"  onClick={() => handleClick("#F9C74F")} style={{ backgroundColor: "#F9C74F" }}></div>
      <div className="color-item"  onClick={() => handleClick("#90BE6D")} style={{ backgroundColor: "#90BE6D" }}></div>
      <div className="color-item" onClick={() => handleClick("#43AA8B")} style={{ backgroundColor: "#43AA8B" }}></div>
      <div className="color-item" onClick={() => handleClick("#577590")} style={{ backgroundColor: "#577590" }}></div>
    </div>
  )
}
