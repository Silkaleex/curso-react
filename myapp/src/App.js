import logo from "./logo.svg";
import "./App.css";
import Componente1 from "./ejercicios/componente1";
// import TaskListComponent from "./componentes/container/task.list";
// import Greeting from "./componentes/pure/greeting";
// import Greetingf from "./componentes/pure/greetingF";
function App() {
  const contactoPrueba = {
    nombre: "Estudiante",
    apellido: "Aprendiendo react",
    email: "Este-Es-Un-Correo@outlook.es",
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente de gretting.js*/}
        {/* <Greeting name="Silkaleex" /> */}
        {/*Componente de ejemplo funcional*/}
        {/* <Greetingf name="Silkaleex" /> */}
        {/*Componente de listado de tareas*/}
        {/* <TaskListComponent /> */}
        <Componente1 contacto={contactoPrueba} />
      </header>
    </div>
  );
}
export default App;
