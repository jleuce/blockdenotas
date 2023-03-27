import React from 'react';
import BarraNota from './BarraNota';
import TituloNota from './TituloNota';
import TextoNota from './TextoNota';
import PieNota from './PieNota';
//import { set, useForm, useFormState } from 'react-hook-form';

function Nota(props) {
  
  /*const {register, handleSubmit , reset, setValue} = useForm();
  const onSubmit = (data) => {
      console.log('onSubmit',data);
  };
  /*
  //campos del formulario
  const vehiculo = register('vehiculo',{required:true});
  const titulo = register('titulo');
  const fechaAsignado = register('fechaAsignado',{required:true});

  titulo="Conductor"
                                listado={estadoActualVehiculos.map(e=>e.conductor)}
                                elegirTextoHandler={(t)=> setValue('conductor', t)} 
                                texto={conductor.value}
                                ref={conductor.ref}
                                onchange={conductor.onChange}
                                elegirTextoHandler={(t)=> setValue('titulo', t)} 
        texto2={titulo.value}
        ref={titulo.ref}
        onchange={titulo.onChange}
  */
  return (
    <div className='nota'>
      <BarraNota></BarraNota>
      <TituloNota 
        texto={props.tituloNota}
      ></TituloNota>
      <TextoNota texto={props.textoNota}></TextoNota>
      <PieNota></PieNota>
    </div>
  )
}

export default Nota