import React from 'react';

const ModalNota= ({ closeModal, modalContent }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal}>Cerrar</button>
        <p>{modalContent}</p>
      </div>
    </div>
  );
}

export default ModalNota;