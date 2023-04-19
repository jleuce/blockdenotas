import React, { useContext, useState } from 'react'
import NotaReducida from './NotaReducida';
import NotaVisual from './NotaVisual'
import { MyContext } from '../context/Contexto';

function PanelNotas() {

  const myContextObject = useContext(MyContext);
  const [notas, setNotas] = useState([
    {idNota: (1), tituloNota:'Prueba 1',textoNota:'Texto Prueba 1',colorNota:'#90BE6D'},
    {idNota: (2), tituloNota:'Prueba 2',textoNota:'Texto Prueba 2',colorNota:'#43AA8B'}
                                    ]);
    
  const agregarNota = (objetoAgregar) => {
    console.log('agregarNota',objetoAgregar);
    setNotas([...notas,objetoAgregar]);
    console.log('array',notas);
  }
  const borrarNota = (idObjetoBorrar) => {
    console.log('borrarNota',idObjetoBorrar);
    const notasTransaccional = notas.filter( nota => nota.idNota !== idObjetoBorrar);
    console.log('notas trans',notasTransaccional);
    setNotas(notasTransaccional);
    console.log('notas original', notas);
    //setNotas(notasTransaccional);
  }
  const editarNota = (objetoEditado) => {
    console.log('editarNota',objetoEditado);
    const notaTransaccional = notas.find( nota => nota.idNota === objetoEditado.id);
    console.log('notas trans',notaTransaccional);
    setNotas(notaTransaccional);
    console.log('nota editada', notas);
  }
    
  return (
    <div className='.panelNotas' style={{background:myContextObject.colorFondo}}>
                  <div><iframe src="https://dolarhoy.com/i/cotizaciones/dolar-blue" frameborder="0"></iframe></div>
          
      <div style={{ textAlign: 'center' }}>
        <NotaReducida
          tituloNota=''
          textoNota=''
          colorNota='#FAFAFA'
          guardarNotaHandler={(nuevaNota) => agregarNota(nuevaNota)}
          textoBoton='Agregar Nota'
          tipo='nueva'
          ></NotaReducida>
      </div>
      <div style={{ textAlign: 'center' }}>Tus notas</div>
      {notas.map( nota => <NotaVisual
                            key = {nota.idNota}
                            idNota ={nota.idNota}
                            tituloNota={nota.tituloNota} 
                            textoNota={nota.textoNota}
                            colorNota={nota.colorNota}
                            guardarNotaHandler={(notaRecibe)=> editarNota(nota.idNota, notaRecibe)}
                            tipoNota='existente'
                            borrarNotaHandler={()=> borrarNota(nota.idNota)}
                            textoBoton='Eliminar nota'
                          ></NotaVisual>)}
    </div>
  )
}

export default PanelNotas