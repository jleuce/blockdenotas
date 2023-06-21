import React from 'react'
import NotaReducida from './NotaReducida'

function NotaNuevaIcono(props) {
    console.log('notaIcono',props);
    if(props.mostrarNotaNueva === false){
        return (
            <div style={{ textAlign: 'center' }}>
                <div className='nota'>
                    <button onClick={props.abrirOCerrarNotaHandler}>
                        Añade una nota...
                    </button>
                </div>
            </div>
        )
    }else{
        return(
        <div style={{ textAlign: 'center' }}>
            <NotaReducida
                volverAIcono={props.abrirOCerrarNotaHandler}
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