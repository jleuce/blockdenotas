import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { colorTextoSegunContraste } from '../funciones/funciones';
import PaletaColores from './PaletaColores';
import ModalNota from './ModalNota'

function NotaVisual(props) {

    const [colorFondoNota,setColorFondoNota] = useState('#FAFAFA');
    const [showColorPicker,setShowColorPicker] = useState(false);
    const colorTextoInputMemo = useMemo(() => colorTextoSegunContraste(colorFondoNota), [colorFondoNota]);

    useEffect(() => {
            setColorFondoNota(props.colorNota);
    }, [])
    
        const cambiarEstadoShowColorPicker = () => {
          console.log(showColorPicker);
          setShowColorPicker((prev) => !prev);
        }

        const elegirColorPaleta = (color) => {
          setColorFondoNota(color);
          console.log(color);
        };

        const [isOpen, setIsOpen] = useState(false);
        const [modalContent, setModalContent] = useState('');

        const openModal = () => {
          setIsOpen(true);
          setModalContent('¡Hola desde el modal!');
        }

        const closeModal = () => {
          setIsOpen(false);
        }

        return (
          <>
            <div>
              <button onClick={openModal}>Abrir modal</button>
              {isOpen && <ModalNota 
                closeModal={closeModal} 
                modalContent={modalContent}
                tituloNota={props.tituloNota}
                textoNota={props.textoNota}
                colorNota={props.colorNota}
                idNota={props.idNota}
                guardarNotaHandler={props.borrarNotaHandler}//Alguien en algun momento se va enojar con esto
                textoBoton={props.textoBoton}
                editarNotaHandler={props.guardarNotaHandler}//Alguien en algun momento se va enojar con esto
               />}
            </div>
            <div className='nota' style={{ backgroundColor: colorFondoNota }}>
                <div className='barraNota'style={{ backgroundColor: colorFondoNota }}>
                    <button onClick={props.borrarNotaHandler}>{props.textoBoton}</button>
                    <button onClick={()=>props.cambiarLugarHandler('adelantar')}>Adelantar</button>
                    <button onClick={()=>props.cambiarLugarHandler('atrasar')}>Atrasar</button>
                </div>
                    <div className='tituloNota'style={{ backgroundColor: colorFondoNota }}>
                        <p style={{ color: colorTextoInputMemo }}>{props.tituloNota}</p>
                    </div>
                    <div className='textoNota'style={{ backgroundColor: colorFondoNota }}>
                        <p style={{ color: colorTextoInputMemo }}>{props.textoNota}</p>
                    </div>
                    <div className='botonApoyable'>
                      <button onClick={cambiarEstadoShowColorPicker} >Mostrar color Picker</button>
                    </div>
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

export default NotaVisual