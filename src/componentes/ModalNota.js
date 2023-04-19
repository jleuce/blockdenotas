import React from 'react';
import NotaReducida from './NotaReducida';

const ModalNota= (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={props.closeModal}>Cerrar</button>
      </div>
        <div>
          <NotaReducida
                            key = {props.idNota}
                            idNota ={props.idNota}
                            tituloNota={props.tituloNota} 
                            textoNota={props.textoNota}
                            colorNota={props.colorNota}
                            guardarNotaHandler={props.guardarNotaHandler}
                            editarNotaHandler={props.editarNotaHandler}
                            textoBoton={props.textoBoton}
                            tipo='edicion'
          ></NotaReducida>
        </div>
      </div>
  );
}

export default ModalNota;