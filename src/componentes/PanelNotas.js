import React, { createContext, useContext, useState } from 'react'
import NotaReducida from './NotaReducida';
import { MyContext } from '../context/Contexto';

function PanelNotas() {

  const myContextObject = useContext(MyContext);
  const [notas, setNotas] = useState([
    {idNota: (1), tituloNota:'Prueba 1',textoNota:'Texto Prueba 1',colorNota:'#adce09'},
    {idNota: (2), tituloNota:'Prueba 2',textoNota:'Texto Prueba 2',colorNota:"#554bd8"}
                                    ]);
    
  const agregarNota = (objetoAgregar) => {
    console.log('agregarNota',objetoAgregar);
    setNotas([...notas,objetoAgregar]);
    console.log('array',notas);
  }
  const borrarNota = (idObjetoBorrar) => {
    console.log('borrarNota',idObjetoBorrar);
    const notasTransaccional = notas.filter( nota => nota.id !== idObjetoBorrar);
    console.log('notas trans',notasTransaccional);
    console.log('notas original', notas);
    //setNotas(notasTransaccional);
  }
    
  return (
    <div className='.panelNotas' style={{background:myContextObject.colorFondo}}>
      <div style={{ textAlign: 'center' }}>
        <NotaReducida
          tituloNota=''
          textoNota=''
          colorNota='#FAFAFA'
          agregarNotaHandler={agregarNota}
          tipoFuncion='agregar'
          funcionHandler={agregarNota}
          textoBoton='Agregar Nota'
          ></NotaReducida>
      </div>
      <div style={{ textAlign: 'center' , backgroundColor:'black' }}>Tus notas</div>
      {notas.map( nota => <NotaReducida
                            key = {nota.idNota}
                            tituloNota={nota.tituloNota} 
                            textoNota={nota.textoNota}
                            colorNota={nota.colorNota}
                            agregarNotaHandler={agregarNota}
                            tipoFuncion='eliminar'
                            funcionHandler={borrarNota}
                            textoBoton='Eliminar nota'
                          ></NotaReducida>)}
    </div>
  )
}

export default PanelNotas