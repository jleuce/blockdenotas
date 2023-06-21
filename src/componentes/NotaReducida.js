import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { colorTextoSegunContraste } from '../funciones/funciones';
import PaletaColores from './PaletaColores';

function NotaReducida(props) {

    console.log(props);

    const [colorFondoNota,setColorFondoNota] = useState('#FAFAFA');
    const [showColorPicker,setShowColorPicker] = useState(false);
    const colorTextoInputMemo = useMemo(() => colorTextoSegunContraste(colorFondoNota), [colorFondoNota]);

    useEffect(() => {
            setValue("titulo", props.tituloNota);
            setValue("texto", props.textoNota);
            setValue('colorPaleta',props.colorNota);
            setColorFondoNota(props.colorNota);
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
          console.log('cant',props.cantidadNotas);
            if(Object.entries(errors).length === 0){
                console.log('guardando');
                props.guardarNotaHandler({
                  idNota: getValues('colorPaleta')+ Date.now(),
                  tituloNota:getValues('titulo'), 
                  textoNota:getValues('texto'),
                  colorNota:getValues('colorPaleta'),
                  fechaEdicion:Date.now(),
                  posicion:props.cantidadNotas + (1),
                })
                reset();
                setColorFondoNota('#FAFAFA');
                setValue('colorPaleta','#FAFAFA');
            }else{
                alert('hay un error rey, no podes guardar esa nota');
            }
        }
        const editarNota = (objeto) =>{
          props.editarNotaHandler(objeto);
        }

        const elegirColorPaleta = (color) => {
          setValue('colorPaleta',color);
          handleSubmit(onSubmit)();
          console.log(colorPaleta1);
        };

        const onSubmit = (data) => {
            console.log('onSubmit',data);
            setColorFondoNota(data.colorPaleta);
            if(props.tipoNota === 'existente'){
              props.editarNotaHandler({
                idNota: props.idNota,
                tituloNota:getValues('titulo'), 
                textoNota:getValues('texto'),
                colorNota:getValues('colorPaleta'),
                fechaEdicion:Date.now(),
              });
            }
        };

        return (
          <>
            <div className='notaFlex' style={{ backgroundColor: colorFondoNota }}>
                <div className='barraNota'style={{ backgroundColor: colorFondoNota }}>
                    <button onClick={props.volverAIcono}>X</button>
                    <button onClick={ejecutarFuncion}>{props.textoBoton}</button>
                    {props.tipo =='edicion'?<button>Editar</button>:''}
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
                    <div className='botonApoyable'>
                      <button onClick={cambiarEstadoShowColorPicker} >Mostrar color Picker</button>
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