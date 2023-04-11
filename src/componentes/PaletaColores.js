import React from 'react'
import { listaColores } from '../funciones/listaColores';

export default function PaletaColores(props) {
  
    function handleClick(color) {
      console.log('colorFondoNota',props.colorFondoNota);
      props.elegirColorPaletaHandler(color);
    }
  return (
      <div>
    <div className="color-palette">
      {listaColores.map(itemColor =>
      <div>
        <div key={itemColor} 
          className={props.colorFondoNota !== itemColor ? "color-item":"color-itemSelected"}
          onClick={() => handleClick(itemColor)} 
          style={{ backgroundColor: itemColor }}
        ></div>
      </div>)}
      </div>
      
    </div>
  )
}
