import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
//import { set, useForm, useFormState } from 'react-hook-form';

function NotaReducida(props) {

    const [titulo, setTitulo] = useState(null);
    const [texto, setTexto] = useState(null);
    const [color,setColor] = useState('#0742ca');
    
    useEffect(() => {
      setTitulo(props.tituloNota);
      setTexto(props.textoNota);
      setColor(props.colorNota);
    }, [])
      
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
        console.log('guardando',titulo,texto,color);
        props.agregarNotaHandler({
          idNota: (3),
          tituloNota:titulo, 
          textoNota:texto,
          colorNota:color,
        })
      }
      //Funciones Formulario
        const {register, handleSubmit, formState:{errors}} = useForm();
        //const { onChange, onBlur, name, ref } = register('titulo');
        const titulo1 = register('titulo',{require:true,maxLength:10});
        const texto1 = register('texto',{require:true,maxLength:50});
        const color1 = register('color');
        const onSubmit = (data) => {
            console.log('onSubmit',data);
            editarTitulo(data.titulo); 
            editarTexto(data.texto); 
            editarColor(data.color); 
        };
      if (props.modo !== 'vista'){
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
                          onChange={titulo1.onChange} // assign onChange event 
                          //onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={titulo1.name} // assign name prop
                          ref={titulo1.ref} // assign ref prop
                      />{errors.titulo?.type === 'maxLength'&&<p>Error</p>}
                  </div>
                  <div className='textoNota'>
                      <input type='text' 
                          defaultValue={texto} 
                          onChange={texto1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={texto1.name} // assign name prop
                          ref={texto1.ref} // assign ref prop
                      />
                  </div> 
                  <div className='pieNota'>
                      <input type='color'
                          defaultValue={color} 
                          onChange={color1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={color1.name} // assign name prop
                          ref={color1.ref} // assign ref prop
                      />
                  </div>
                  <input type='submit'></input>
              </form>
          </div>
        )
      }else{
        return (
          <div className='nota'>
              <div className='barraNota'>
                  <button>Editar</button>
                  <button>Eliminar</button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='tituloNota'>
                      <input type='text' 
                          defaultValue={titulo} 
                          onChange={titulo1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} 
                          name={titulo1.name} // assign name prop
                          ref={titulo1.ref} // assign ref prop
                      />
                  </div>
                  <div className='textoNota'>
                      <input type='text' 
                          defaultValue={texto} 
                          onChange={texto1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={texto1.name} // assign name prop
                          ref={texto1.ref} // assign ref prop
                      />
                  </div> 
                  <div className='pieNota'>
                      <input type='color'
                          defaultValue={color} 
                          onChange={color1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={color1.name} // assign name prop
                          ref={color1.ref} // assign ref prop
                      />
                  </div>
              </form>
          </div>
        )
      }
}

export default NotaReducida