import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/Contexto';

function NavBar(props) {

  const myContextObject = useContext(MyContext);

  console.log('props del navBar', props);

  return (
    <div className='NavBar'>
      <button onClick={myContextObject.cambiarColorFondo}>CAMBIAR MODO</button>
      <button>Menu</button>
      <button>Logo</button>
      <button>Buscar</button>
      <button>Actualizar</button>
      <button>Cambio de vista</button>
      <button>Ajustes</button>
      <h1>{props.usuario.nombre}</h1>
      <img src={props.usuario.img}></img>
    </div>
  )
}

export default NavBar