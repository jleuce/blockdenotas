import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { colorTextoSegunContraste } from '../funciones/funciones';
import PaletaColores from './PaletaColores';
import Desplegable from './Desplegable';

function NotaReducida(props) {

    const [titulo, setTitulo] = useState(null);
    const [texto, setTexto] = useState(null);
    const [color,setColor] = useState(null);
    const [colorTextoInput,setColorTextoInput] = useState('#000');
    useEffect(() => {
        if(props.modo==='vista'){
            setValue("titulo", props.tituloNota);
            setValue("texto", props.textoNota);
            setColor(props.colorNota);
            setColorTextoInput(colorTextoSegunContraste(props.colorNota));
        }else{
            setValue("titulo", '');
            setValue("texto", '');
            setColor('#fff');
            setColorTextoInput(colorTextoSegunContraste('#FAFAFA'));
        }
    }, [])
      
      //Funciones Formulario
        const {setValue, register, handleSubmit, formState:{errors},reset} = useForm();
        const titulo1 = register('titulo',{require:true,maxLength:20});
        const texto1 = register('texto',{require:true,maxLength:50});
        const colorPaleta1 = register('colorPaleta',{require});

        const guardar = () =>{
          if(Object.entries(errors).length === 0){
              console.log('guardando',titulo,texto,color);
              props.agregarNotaHandler({
              idNota: (3),
              tituloNota:titulo, 
              textoNota:texto,
              colorNota:color,
              })
              reset();
          }else{
              alert('hay un error rey, no podes guardar esa nota');
          }
        }

        const elegirColorPaleta = (color) => {
          setValue('colorPaleta',color);
          handleSubmit(onSubmit)();
          console.log(colorPaleta1);
        };

        const onSubmit = (data) => {
            console.log('onSubmit',data);
            setTitulo(data.titulo); 
            setTexto(data.texto); 
            setColor(data.colorPaleta);
            setColorTextoInput(colorTextoSegunContraste(data.colorPaleta));
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
                  <h1 className='tituloNota'style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }}  className={errors.titulo?.type === 'maxLength'&&'inputError'}
                          placeholder='Titulo...'
                          onChange={titulo1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={titulo1.name} // assign name prop
                          ref={titulo1.ref} // assign ref prop
                      />{errors.titulo?.type === 'maxLength'&&<p>Error mas de 5 caract</p>}
                  </h1>
                  <p className='textoNota'style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }} 
                          placeholder='Texto...' 
                          onChange={texto1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={texto1.name} // assign name prop
                          ref={texto1.ref} // assign ref prop
                      />
                  </p>
                  <div>
                    <Desplegable><PaletaColores elegirColorPaletaHandler={elegirColorPaleta}/></Desplegable>
                  </div> 
                  <div>
                    {/*<PaletaColores
                        name={colorPaleta1.name}
                        ref={colorPaleta1.ref}
                        elegirColorPaletaHandler={elegirColorPaleta}
                        onSelect={
                            handleSubmit(onSubmit)
                          }
                        onChange={colorPaleta1.onChange}
                        ></PaletaColores>*/}
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
                  <h1 className='tituloNota' style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }} 
                          //defaultValue={titulo} 
                          onChange={titulo1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} 
                          name={titulo1.name} // assign name prop
                          ref={titulo1.ref} // assign ref prop
                      />
                  </h1>
                  <p className='textoNota'style={{ backgroundColor: color }}>
                      <input type='text' style={{ color: colorTextoInput }}
                          //defaultValue={texto} 
                          onChange={texto1.onChange} // assign onChange event 
                          onBlur={handleSubmit(onSubmit)} // assign onBlur event
                          name={texto1.name} // assign name prop
                          ref={texto1.ref} // assign ref prop
                      />
                  </p>
                  <div>
                    <Desplegable contenido={<PaletaColores/>}><PaletaColores/></Desplegable>
                  </div>  
                  <div>
                    <PaletaColores
                        name={colorPaleta1.name}
                        ref={colorPaleta1.ref}
                        elegirColorPaletaHandler={elegirColorPaleta}
                        onSelect={
                            handleSubmit(onSubmit)
                          }
                        onChange={colorPaleta1.onChange}
                    ></PaletaColores>
                  </div>
                  
              </form>
          </div>
        )
      }
}

export default NotaReducida