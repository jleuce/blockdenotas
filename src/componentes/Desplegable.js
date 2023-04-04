import React, { useState } from 'react'

function Desplegable({children}) {

    const [estadoDesplegado, setEstadoDesplegado] = useState(false);
    
    const cambiarEstado = () =>{
        //setEstadoDesplegado(!estadoDesplegado);
        setEstadoDesplegado((prev) => !prev);
    };

    return (
        <div className="dropdown">
        <button className="dropdown__toggle" onClick={cambiarEstado}>
          {estadoDesplegado ? "Cerrar" : "Abrir"} Dropdown
        </button>
        {estadoDesplegado && (
          <div className="dropdown__content">
            <div>{children}</div>
          </div>
        )}
      </div>
  )
}

export default Desplegable