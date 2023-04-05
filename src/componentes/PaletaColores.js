import React from 'react'
import { listaColores } from '../funciones/listaColores';

export default function PaletaColores(props) {
  
    function handleClick(color) {
      console.log('colorFondoNota',props.colorFondoNota);
      props.elegirColorPaletaHandler(color);
    }
  return (
    <div className="color-palette">
      {listaColores.map(itemColor => props.colorFondoNota !== itemColor ?
      <div key={itemColor} 
        /*className={props.colorFondoNota !== itemColor ? "color-item":"color-itemSelected"}*/
        className="color-item"
        onClick={() => handleClick(itemColor)} 
        style={{ backgroundColor: itemColor }}
      ></div>:<>
      <input type='checkbox'
        key={itemColor} 
        /*className={props.colorFondoNota !== itemColor ? "color-item":"color-itemSelected"}*/
        className="color-item"
        onClick={() => handleClick(itemColor)} 
        style={{ backgroundColor: itemColor }}
      ></input></>)}
      
    </div>
  )
}
