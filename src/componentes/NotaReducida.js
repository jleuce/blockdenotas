import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { colorTextoSegunContraste } from '../funciones/funciones';

function NotaReducida(props) {

    const [titulo, setTitulo] = useState(null);
    const [texto, setTexto] = useState(null);
    const [color,setColor] = useState(null);
    const [colorTextoInput,setColorTextoInput] = useState('#000');
    useEffect(() => {
        if(props.modo==='vista'){
            setValue("titulo", props.tituloNota);
            setValue("texto", props.textoNota);
            setValue("color", props.colorNota);
            setColor(props.colorNota);
            setColorTextoInput(colorTextoSegunContraste(props.colorNota));
        }else{
            setValue("titulo", 'Escribi titulo...');
            setValue("texto", 'Escribi texto');
            setColor('#fff');
            setValue('color','#FBFBFC');
        }
    }, [])
      
      const guardar = () =>{
        if(Object.entries(errors).length === 0){
            console.log('guardando',titulo,texto,color);
            props.agregarNotaHandler({
            idNota: (3),
            tituloNota:titulo, 
            textoNota:texto,
            colorNota:color,
            })
        }else{
            alert('hay un error rey, no podes guardar esa nota');
        }
      }
      //Funciones Formulario
        const {setValue, register, handleSubmit, formState:{errors}} = useForm();
        const titulo1 = register('titulo',{require:true,maxLength:10});
        const texto1 = register('texto',{require:true,maxLength:50});
        const color1 = register('color');

        const onSubmit = (data) => {
            console.log('onSubmit',data);
            setTitulo(data.titulo); 
            setTexto(data.texto); 
            setColor(data.color);
            setColorTextoInput(colorTextoSegunContraste(data.color));
        };
      if (props.modo !== 'vista'){
        return (
          <div className='nota' style={{ backgroundColor: color }}>
              <div className='barraNota'style={{ backgroundColor: color }}>
                  <button>Volver</button>
                  <button onClick={guardar}>Guardar</button>
                  <button>Eliminar</button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='tituloNota'style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }}  className={errors.titulo?.type === 'maxLength'&&'inputError'}
                          //defaultValue={titulo} 
                          onChange={titulo1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={titulo1.name} // assign name prop
                          ref={titulo1.ref} // assign ref prop
                      />{errors.titulo?.type === 'maxLength'&&<p>Error mas de 5 caract</p>}
                  </div>
                  <div className='textoNota'style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }} 
                          //defaultValue={texto} 
                          onChange={texto1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={texto1.name} // assign name prop
                          ref={texto1.ref} // assign ref prop
                      />
                  </div> 
                  <div className='pieNota'style={{ backgroundColor: color }}>
                      <input type='color'
                          //defaultValue={color} 
                          onChange={color1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={color1.name} // assign name prop
                          ref={color1.ref} // assign ref prop
                      />
                  </div>
              </form>
          </div>
        )
      }else{
        return (
          <div className='nota' style={{ backgroundColor: color }}>
              <div className='barraNota' style={{ backgroundColor: color }}>
                  <button>Editar</button>
                  <button>Eliminar</button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='tituloNota' style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }} 
                          //defaultValue={titulo} 
                          onChange={titulo1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} 
                          name={titulo1.name} // assign name prop
                          ref={titulo1.ref} // assign ref prop
                      />
                  </div>
                  <div className='textoNota'style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }}
                          //defaultValue={texto} 
                          onChange={texto1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={texto1.name} // assign name prop
                          ref={texto1.ref} // assign ref prop
                      />
                  </div> 
                  <div className='pieNota' style={{ backgroundColor: color }}>
                      <input type='color'
                          //defaultValue={color} 
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