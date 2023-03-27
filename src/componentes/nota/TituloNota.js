import React from 'react'
import { useForm } from 'react-hook-form';

function TituloNota({texto}) {

   //Funciones Formulario
   const {register, handleSubmit} = useForm();
   const onSubmit = (data) => {
       console.log('onSubmit',data);
   };

  if (texto === null)
  {
    return (
      <div>Escriba algo...</div>
    )
  }else{
    return (
      <div className='tituloNota'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' value={texto} name='algo' {...register('titulo',{required:true})}/>
          <input type="submit" value="Enviar"/>
        </form>
      </div>  
    )
  }
}

export default TituloNota