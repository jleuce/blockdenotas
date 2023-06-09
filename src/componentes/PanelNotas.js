import React, { useContext, useMemo, useState } from 'react'
import NotaReducida from './NotaReducida';
import NotaVisual from './NotaVisual'
import { MyContext } from '../context/Contexto';
import { ordenarNotas } from '../funciones/funciones';
import NotaNuevaIcono from './NotaNuevaIcono';

function PanelNotas() {

  const myContextObject = useContext(MyContext);
  const [mostrarNotaNueva,setMostrarNotaNueva] = useState(false);
  const [notas, setNotas] = useState([
    {idNota: (1), tituloNota:'Prueba 1',textoNota:'Texto Prueba 1',colorNota:'#55efc4',fijada:false,posicion:(1)},
    {idNota: (2), tituloNota:'Prueba 2',textoNota:'Texto Prueba 2',colorNota:'#81ecec',fijada:false,posicion:(2)},
    {idNota: (3), tituloNota:'Prueba 3',textoNota:'Texto Prueba 3',colorNota:'#74b9ff',fijada:false,posicion:(3)}
                                    ]);
  const notasOrdenadas = useMemo(() => ordenarNotas(notas), [notas]);
    
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
  const cambiarLugar = (tipoCambio,objeto) => {
    const a = (1);
    const b = (-1);
    const funcion = (x) => {
      if(notas.find(laNota => laNota.posicion === objeto.posicion - x) !== undefined){
        const arrayTransaccional = notas.filter(objetoBuscado => objetoBuscado.posicion !== objeto.posicion);
        const objetoTransaccional = arrayTransaccional.find(objetoBuscado => objetoBuscado.posicion === objeto.posicion - (x));
        const objetoNuevo = {...objeto, posicion:objeto.posicion-(x)}
        const objetoAnteriorAlNuevo = {...objetoTransaccional,posicion: objetoTransaccional.posicion + (x)}
        const arraySinCambios = arrayTransaccional.filter(objetoBuscado => objetoBuscado.posicion !== objetoTransaccional.posicion);
        setNotas([...arraySinCambios,objetoNuevo,objetoAnteriorAlNuevo]);
      }else{
        console.log(`no se puede ${x} al posicion actual`);
      }
    }
    if (tipoCambio === 'adelantar'){
      funcion(a);
    }else{
      funcion(b);
    }
  }
  const abrirOCerrarNota = () => {
    setMostrarNotaNueva((prev) => !prev);
  }

  return (
    <div className='.panelNotas' style={{background:myContextObject.colorFondo}}>
      <div>
        <NotaNuevaIcono
          abrirOCerrarNotaHandler={abrirOCerrarNota} 
          agregarNotaHandler={agregarNota}
          notasOrdenadas={notasOrdenadas}
          mostrarNotaNueva={mostrarNotaNueva}
        ></NotaNuevaIcono>
      </div>
      <div style={{ textAlign: 'center' }}>Tus notas</div>
        <div className='flexBox'>
          {notasOrdenadas.map( nota => <NotaVisual
                                key = {nota.idNota}
                                idNota ={nota.idNota}
                                tituloNota={nota.tituloNota} 
                                textoNota={nota.textoNota}
                                colorNota={nota.colorNota}
                                guardarNotaHandler={(notaRecibe)=> editarNota(nota.idNota, notaRecibe)}
                                tipoNota='existente'
                                borrarNotaHandler={()=> borrarNota(nota.idNota)}
                                textoBoton='Eliminar nota'
                                cambiarLugarHandler = {(tipo) => cambiarLugar(tipo,nota)}
                              ></NotaVisual>)}
      </div>
    </div>
  )
}

export default PanelNotas