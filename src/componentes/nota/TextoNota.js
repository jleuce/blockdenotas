import React from 'react'

function TextoNota({texto}) {
  if (texto === null)
  {
    return (
      <div>Escriba algo...</div>
    )
  }else{
    return (
      <div className='textoNota'>
        <p>{texto}</p>
      </div>  
    )
  }
}

export default TextoNota