import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { colorTextoSegunContraste } from '../funciones/funciones';
import PaletaColores from './PaletaColores';
import Desplegable from './Desplegable';

function NotaReducida(props) {

    const [colorFondoNota,setColorFondoNota] = useState('#FAFAFA');
    const [showColorPicker,setShowColorPicker] = useState(false);
    //const [colorTextoInput,setColorTextoInput] = useState('#FAFAFA');
    const colorTextoInputMemo = useMemo(() => colorTextoSegunContraste(colorFondoNota), [colorFondoNota]);

    useEffect(() => {
            //console.log('colorFondo',colorFondoNota);
            //console.log('colorMemo',colorTextoInputMemo);
            setValue("titulo", props.tituloNota);
            setValue("texto", props.textoNota);
            setValue('colorPaleta',props.colorNota);
            setColorFondoNota(props.colorNota);
            //setColorTextoInput(colorTextoSegunContraste(props.colorNota));
    }, [])
      
      //Funciones Formulario
        const {setValue, register, handleSubmit, getValues , formState:{errors},reset} = useForm();
        const titulo1 = register('titulo',{require:true,maxLength:20});
        const texto1 = register('texto',{require:true,maxLength:50});
        const colorPaleta1 = register('colorPaleta',{require});

        const cambiarEstadoShowColorPicker = () => {
          console.log(showColorPicker);
          setShowColorPicker((prev) => !prev);
        }
        const ejecutarFuncion = () =>{
          if (props.tipoFuncion ==='agregar'){
            console.log('guardar y date.now',Date.now());
            if(Object.entries(errors).length === 0){
                console.log('guardando');
                props.funcionHandler({
                  idNota: getValues('colorPaleta')+ Date.now(),
                  tituloNota:getValues('titulo'), 
                  textoNota:getValues('texto'),
                  colorNota:getValues('colorPaleta'),
                })
                reset();
            }else{
                alert('hay un error rey, no podes guardar esa nota');
            }
          }else{
            console.log('borrar');
            props.funcionHandler(props.idNota);
          }
        }

        const elegirColorPaleta = (color) => {
          setValue('colorPaleta',color);
          handleSubmit(onSubmit)();
          console.log(colorPaleta1);
        };

        const onSubmit = (data) => {
            console.log('onSubmit',data);
            setColorFondoNota(data.colorPaleta);
            //setColorTextoInput(colorTextoSegunContraste(data.colorPaleta));
        };

        return (
          <>
            <div className='nota' style={{ backgroundColor: colorFondoNota }}>
                <div className='barraNota'style={{ backgroundColor: colorFondoNota }}>
                    <button onClick={ejecutarFuncion}>{props.textoBoton}</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='tituloNota'style={{ backgroundColor: colorFondoNota }}>
                        <input type='text' style={{ color: colorTextoInputMemo }}  className={errors.titulo?.type === 'maxLength'&&'inputError'}
                            placeholder='Titulo...'
                            onChange={titulo1.onChange} // assign onChange event 
                            onBlur={handleSubmit(onSubmit)} // assign onBlur event
                            name={titulo1.name} // assign name prop
                            ref={titulo1.ref} // assign ref prop
                        />{errors.titulo?.type === 'maxLength'&&<p>Error mas de 5 caract</p>}
                    </h1>
                    <p className='textoNota'style={{ backgroundColor: colorFondoNota }}>
                        <input type='text' style={{ color: colorTextoInputMemo }} 
                            placeholder='Texto...' 
                            onChange={texto1.onChange} // assign onChange event 
                            onBlur={handleSubmit(onSubmit)} // assign onBlur event
                            name={texto1.name} // assign name prop
                            ref={texto1.ref} // assign ref prop
                        />
                    </p>
                    <div>
                      <button onClick={cambiarEstadoShowColorPicker}>Mostrar color Picker</button>
                    </div>
                </form>
                {showColorPicker && (
                  <div className='color-palete-container'>
                    <div onClick={cambiarEstadoShowColorPicker}></div>
                    <PaletaColores elegirColorPaletaHandler={elegirColorPaleta} colorFondoNota={colorFondoNota}/>
                  </div>
                  )} 
              </div>
          </>
        )
}

export default NotaReducida