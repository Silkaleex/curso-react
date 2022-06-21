import logo from "./logo.svg";
import "./App.css";
import Ejemplo1 from "./hooks/ejemplo1";
import Ejemplo2 from "./hooks/ejemplo2";
import MicomponenteConTexto from "./hooks/ejemplo3";
import Ejemplo4 from "./hooks/ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" rel="noopener noreferrer">
          Learn React
          {/*Ejemplos de uso de hooks */}
          {/* <Ejemplo1></Ejemplo1> */}
          {/* <Ejemplo2></Ejemplo2> */}
          <MicomponenteConTexto></MicomponenteConTexto>
          <Ejemplo4 Nombre="Silkaleex">
            {/*Todo lo que hay aqui,
             es tratado como props.children */}
            <h3>Contenido del props.children</h3>
          </Ejemplo4>
        </a>
      </header>
    </div>
  );
}

export default App;
