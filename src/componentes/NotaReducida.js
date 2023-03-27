import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
//import { set, useForm, useFormState } from 'react-hook-form';

function NotaReducida(props) {
   
    useEffect(() => {
        setTitulo(props.tituloNota);
        setTexto(props.textoNota);
      }, [])
      
      const [titulo, setTitulo] = useState(null);
      const [texto, setTexto] = useState(null);
      const [color,setColor] = useState('#030303');
    
      const editarTitulo = (nuevoTexto) => {
        setTitulo(nuevoTexto);
      }
      const editarTexto = (nuevoTexto) => {
        setTexto(nuevoTexto);
      }
      const editarColor = (nuevoTexto) => {
        setColor(nuevoTexto);
      }
      const guardar = () =>{
        console.log('guardando',titulo,texto);
        props.agregarNotaHandler({
          idNota: (3),
          tituloNota:titulo, 
          textoNota:texto,
        })
      }
      //Funciones Formulario
        const {register, handleSubmit} = useForm();
        const { onChange, onBlur, name, ref } = register('titulo');
        const { onChange, onBlur, name, ref } = register('texto');
        const onSubmit = (data) => {
            console.log('onSubmit',data);
            editarTitulo(data.titulo); 
            editarTexto(data.texto); 
            editarColor(data.color); 
        };
    
      return (
        <div className='nota'>
            <div className='barraNota'>
                <button>Volver</button>
                <button onClick={guardar}>Guardar</button>
                <button>Eliminar</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='tituloNota'>
                    <input type='text' 
                        defaultValue={titulo} 
                        onChange={onChange} // assign onChange event 
                        onBlur={handleSubmit(onSubmit)} // assign onBlur event
                        name={titulo} // assign name prop
                        ref={ref} // assign ref prop
                    />
                </div>
                <div className='textoNota'>
                    <input type='text' 
                        defaultValue={texto} 
                        onChange={onChange} // assign onChange event 
                        onBlur={handleSubmit(onSubmit)} // assign onBlur event
                        name={texto} // assign name prop
                        ref={ref} // assign ref prop
                    />
                </div> 
                <div className='pieNota'>
                    <input type='color'
                        defaultValue={color} 
                        onChange={onChange} // assign onChange event 
                        onBlur={handleSubmit(onSubmit)} // assign onBlur event
                        name={color} // assign name prop
                        ref={ref} // assign ref prop
                    />
                </div>
            </form>
        </div>
      )
}

export default NotaReducida