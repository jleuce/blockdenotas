import React, { createContext, useState } from 'react';

export const MyContext = createContext();

function Contexto({children}) {

  const [colorFondo, setColorFondo] = useState('white');

  const cambiarColorFondo = () => {
    if (colorFondo === 'white'){
      setColorFondo('#424242');
    }else{
      setColorFondo('white');
    }
    console.log('cambiarColor',colorFondo);
  };
  const objetoConTodo = {
    colorFondo,
    cambiarColorFondo,
  }

  return (
    <MyContext.Provider value = { objetoConTodo }>
        {children}
    </MyContext.Provider>
  );
};

export default Contexto;
