import React from 'react'
import NotaReducida from './NotaReducida'

function NotaNuevaIcono(props) {
    console.log('notaIcono',props);
    if(props.mostrarNotaNueva === false){
        return (
            <div className='nota'>
                <button onClick={props.abrirNotaHandler}>
                    Añade una nota...
                </button>
            </div>
        )
    }else{
        return(
        <div style={{ textAlign: 'center' }}>
            <NotaReducida
                tituloNota=''
                textoNota=''
                colorNota='#FAFAFA'
                guardarNotaHandler={(nuevaNota) => props.agregarNotaHandler(nuevaNota)}
                textoBoton='Agregar Nota'
                tipo='nueva'
                cantidadNotas={props.notasOrdenadas.length}
            ></NotaReducida>
        </div>)
        }
}

export default NotaNuevaIcono