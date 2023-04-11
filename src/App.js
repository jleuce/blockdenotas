import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import PanelNotas from './componentes/PanelNotas'
import Contexto from './context/Contexto';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'; falta desinstalar

function App() {

  const [usuario, setUsuario] = useState({nombre:'Sin usuario',
  img:'Sin imagen'});
  const [loadingUsuario, setLoadingUsuario] = useState(false);

  useEffect(() => {
    setLoadingUsuario(true);
    fetch('https://randomuser.me/api/?seed=foobar')
    .then(response => response.json())
    .then(data => setUsuario({nombre:data.results[0].name.last,img:data.results[0].picture.thumbnail}))
    .then(() => setLoadingUsuario(false))
  }, [])
  
  return (
    <>
      <Contexto>
        <NavBar usuario={usuario}/>
        <div>
          <PanelNotas/>
        </div>
      </Contexto>
    </>
  );
}

export default App;
