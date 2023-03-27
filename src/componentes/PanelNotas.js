import React, { useState } from 'react'
import Nota from './nota/Nota';
import NotaReducida from './NotaReducida';

function PanelNotas() {
  const [notas, setNotas] = useState([{idNota: (1), tituloNota:'Titulo Prueba', textoNota:'Texto Prueba'},
                                      {idNota: (2), tituloNota:'Titulo Prueba 2', textoNota:'Texto Prueba 2'}
                                    ]);

  const agregarNota = (objetoAgregar) => {
    setNotas([...notas,objetoAgregar]);
  }

  return (
    <div className='.panelNotas'>
      <div>
        <NotaReducida
          tituloNota='Nueva Nota'
          textoNota='...'
          agregarNotaHandler={agregarNota}
          ></NotaReducida>
      </div>
      {notas.map( nota => <NotaReducida
                            key = {nota.idNota}
                            tituloNota={nota.tituloNota} 
                            textoNota={nota.textoNota}
                            agregarNotaHandler={agregarNota}
                          ></NotaReducida>)}
    </div>
  )
}

export default PanelNotas