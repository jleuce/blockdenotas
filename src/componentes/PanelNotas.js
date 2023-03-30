import React, { useState } from 'react'
import NotaReducida from './NotaReducida';

function PanelNotas() {
  const [notas, setNotas] = useState([
    {idNota: (1), tituloNota:'12345',textoNota:'Texto Prueba',colorNota:'#adce09'},
    {idNota: (2), tituloNota:'54321',textoNota:'Texto Prueba 2',colorNota:"#554bd8"}
                                    ]);

 const [colorFondo, setColorFondo] = useState('white');  
 const [colorBoton, setColorBoton] = useState('blue');  
 const [estadoColorFondo, setEstadoColorFondo] = useState(false);  

  const agregarNota = (objetoAgregar) => {
    setNotas([...notas,objetoAgregar]);
  }
  const cambiarModo = ()=>{
    if (estadoColorFondo===false){
      //setColorFondo('#696969')
      setColorFondo('black');
      setEstadoColorFondo(true);
    }else{
      //setColorFondo('#000');
      setColorFondo('white');
      setEstadoColorFondo(false);
    }
    
    console.log('color fondo',colorFondo);
    console.log('estado color',estadoColorFondo);
  }

  return (
    <div className='.panelNotas' style={{background:colorFondo}}>
      <div>
        <button onClick={cambiarModo} style={{background:'blue'}}>Cambiar modo</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <NotaReducida
          tituloNota='Nueva Nota'
          textoNota='...'
          agregarNotaHandler={agregarNota}
          ></NotaReducida>
      </div>
      <div style={{ textAlign: 'center' , backgroundColor:'black' }}>Tus notas</div>
      {notas.map( nota => <NotaReducida
                            key = {nota.idNota}
                            tituloNota={nota.tituloNota} 
                            textoNota={nota.textoNota}
                            colorNota={nota.colorNota}
                            agregarNotaHandler={agregarNota}
                            modo='vista'
                          ></NotaReducida>)}
    </div>
  )
}

export default PanelNotas