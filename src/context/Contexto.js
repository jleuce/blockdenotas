import React, { createContext, useState } from 'react';

export const MyContext = createContext();

function Contexto({children}) {

  const [colorFondo, setColorFondo] = useState('white');
  const [textoBoton, setTextoBoton] = useState('modo oscuro');

  const cambiarColorFondo = () => {
    if (colorFondo === 'white'){
      setColorFondo('#424242');
      setTextoBoton('modo bueno');
    }else{
      setColorFondo('white');
      setTextoBoton('modo oscuro');
    }
    console.log('cambiarColor',colorFondo);
  };
  const objetoConTodo = {
    colorFondo,
    textoBoton,
    cambiarColorFondo,
  }

  return (
    <MyContext.Provider value = { objetoConTodo }>
        {children}
    </MyContext.Provider>
  );
};

export default Contexto;
