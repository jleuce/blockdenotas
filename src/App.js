import './App.css';
import NavBar from './componentes/NavBar';
import PanelNotas from './componentes/PanelNotas'
import Contexto from './context/Contexto';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'; falta desinstalar

function App() {
  return (
    <>
      <Contexto>
        <NavBar/>
        <div>
          <PanelNotas/>
        </div>
      </Contexto>
    </>
  );
}

export default App;
