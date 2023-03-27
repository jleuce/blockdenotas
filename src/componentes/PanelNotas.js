import React, { useState } from 'react'
import Nota from './nota/Nota';

function PanelNotas() {
  const [notas, setNotas] = useState([{idNota: (1), tituloNota:'Titulo Prueba', textoNota:'Texto Prueba'},
                                      {idNota: (2), tituloNota:'Titulo Prueba 2', textoNota:'Texto Prueba 2'}
                                    ]);

  const agregarNota = (objetoAgregar) => {
    setNotas([...notas,objetoAgregar]);
  }

  return (
    <div className='.panelNotas'>
      {notas.map( nota => <Nota
                            key = {nota.idNota}
                            tituloNota={nota.tituloNota} 
                            textoNota={nota.textoNota}
                            agregarNotaHandler={agregarNota}
                          ></Nota>)}
    </div>
  )
}

export default PanelNotas