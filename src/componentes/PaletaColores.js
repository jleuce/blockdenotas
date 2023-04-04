import React from 'react'
import { listaColores } from '../funciones/listaColores';

export default function PaletaColores(props) {
  
    function handleClick(color) {
      props.elegirColorPaletaHandler(color);
    }
  return (
    <div className="color-palette">
      {listaColores.map(itemColor => <div key={itemColor} className="color-item"  onClick={() => handleClick(itemColor)} style={{ backgroundColor: itemColor }}></div>)}
    </div>
  )
}
