import React from 'react'

function BarraNota(props) {
  return (
    <div className='barraNota'>
      <button>Volver</button>
      <button onClick={props.guardarHandler}>Guardar</button>
      <button>Eliminar</button>
    </div>
  )
}

export default BarraNota