import React, { useState } from 'react'
import NotaReducida from './NotaReducida';

function PanelNotas() {
  const [notas, setNotas] = useState([
    {idNota: (1), tituloNota:'12345',textoNota:'Texto Prueba',colorNota:'#adce09'},
    {idNota: (2), tituloNota:'54321',textoNota:'Texto Prueba 2',colorNota:"#554bd8"}
                                    ]);

  const agregarNota = (objetoAgregar) => {
    setNotas([...notas,objetoAgregar]);
  }

  return (
    <div className='.panelNotas'>
      <div style={{ textAlign: 'center' }}>
        <NotaReducida
          tituloNota='Nueva Nota'
          textoNota='...'
          agregarNotaHandler={agregarNota}
          ></NotaReducida>
      </div>
      <div style={{ textAlign: 'center' , backgroundColor:'black' }}>Tus notas</div>
      {notas.map( nota => <NotaReducida
                            key = {nota.idNota}
                            tituloNota={nota.tituloNota} 
                            textoNota={nota.textoNota}
                            colorNota={nota.colorNota}
                            agregarNotaHandler={agregarNota}
                            modo='vista'
                          ></NotaReducida>)}
    </div>
  )
}

export default PanelNotas