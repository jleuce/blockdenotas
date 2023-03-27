import React from 'react'
import { useForm } from 'react-hook-form';

function TituloNota({texto}) {

   //Funciones Formulario
   const {register, handleSubmit} = useForm();
   const { onChange, onBlur, name, ref } = register('titulo');
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
          <input type='text' 
            defaultValue={texto} 
            onChange={onChange} // assign onChange event 
            onBlur={handleSubmit(onSubmit)} // assign onBlur event
            name={name} // assign name prop
            ref={ref} // assign ref prop
          />
        </form>
      </div>  
    )
  }
}

export default TituloNota