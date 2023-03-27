import React, { useEffect, useState } from 'react';
import BarraNota from './BarraNota';
import TituloNota from './TituloNota';
import TextoNota from './TextoNota';
import PieNota from './PieNota';
//import { set, useForm, useFormState } from 'react-hook-form';

function Nota(props) {
 
  useEffect(() => {
    setTitulo(props.tituloNota);
    setTexto(props.textoNota);
  }, [])
  
  const [titulo, setTitulo] = useState(null);
  const [texto, setTexto] = useState(null);

  const editarTitulo = (nuevoTexto) => {
    setTitulo(nuevoTexto);
  }
  const editarTexto = (nuevoTexto) => {
    setTexto(nuevoTexto);
  }

  return (
    <div className='nota'>
      <BarraNota></BarraNota>
      <TituloNota 
        texto={titulo}
        editarTituloHandler={editarTitulo}
      ></TituloNota>
      <TextoNota 
        texto={texto}
        editarTextoHandler={editarTexto}
      ></TextoNota>
      <PieNota></PieNota>
    </div>
  )
}

export default Nota