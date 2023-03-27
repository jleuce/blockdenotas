import React from 'react'

function TituloNota({texto}) {
  if (texto === null)
  {
    return (
      <div>Escriba algo...</div>
    )
  }else{
    return (
      <div className='tituloNota'>
        <input type='text' value={texto}/>
      </div>  
    )
  }
}

export default TituloNota