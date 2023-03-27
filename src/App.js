import './App.css';
import Nota from './componentes/nota/Nota';
import NavBar from './componentes/NavBar';
import PanelNotas from './componentes/PanelNotas'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'; falta desinstalar

function App() {
  return (
    <>
      <NavBar/>
      <div>
        <PanelNotas/>
      </div>
    </>
  );
}

export default App;
