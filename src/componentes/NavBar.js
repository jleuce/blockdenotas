import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/Contexto';

function NavBar(props) {

  const myContextObject = useContext(MyContext);

  console.log('props del navBar', props);

  return (
    <header className='navbar'>
       <a href="#" class="navbar-brand">
        <h1 className='navbar-brand__title'>Block de notas</h1>
      </a>
      <nav className="navbar-menu">
        <ul class="navbar-menu__list">
          <li className='navbar-menu__item'><button className='navbar-menu__item' onClick={myContextObject.cambiarColorFondo}>{myContextObject.textoBoton}</button></li>
          <li className='navbar-menu__item'>Menu</li>
          <li className='navbar-menu__item'>Logo</li>
          <li className='navbar-menu__item'>Buscar</li>
          <li className='navbar-menu__item'>Actualizar</li>
          <li className='navbar-menu__item'>Cambio de vista</li>
          <li className='navbar-menu__item'>Ajustes</li>
          <li className='navbar-menu__item'><h1>{props.usuario.nombre}</h1></li>
          <li className='navbar-menu__item'><img className='navbar-menu__item' src={props.usuario.img}></img></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar