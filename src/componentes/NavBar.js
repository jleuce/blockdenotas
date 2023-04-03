import React, { useContext } from 'react'
import { MyContext } from '../context/Contexto';

function NavBar() {

  const myContextObject = useContext(MyContext);

  return (
    <div className='NavBar'>
      <button onClick={myContextObject.cambiarColorFondo}>CAMBIAR MODO</button>
      <button>Menu</button>
      <button>Logo</button>
      <button>Buscar</button>
      <button>Actualizar</button>
      <button>Cambio de vista</button>
      <button>Ajustes</button>
      <button>Mas apps</button>
      <button>Usuario</button>
    </div>
  )
}

export default NavBar