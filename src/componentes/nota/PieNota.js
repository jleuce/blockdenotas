import React from 'react';
import { useForm } from 'react-hook-form';

function PieNota() {
  //Funciones Formulario
  const {register, handleSubmit} = useForm();
  const { onChange, onBlur, name, ref } = register('color');
  const onSubmit = (data) => {
      console.log('onSubmit',data);
  };
  return (
    <div className='pieNota'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type='color' 
            onChange={onChange} // assign onChange event 
            onBlur={handleSubmit(onSubmit)} // assign onBlur event
            name={name} // assign name prop
            ref={ref} // assign ref prop
          />
        </form>
    </div>
  )
}

export default PieNota