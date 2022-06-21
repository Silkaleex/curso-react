/*Ejemplo Hooks
-useState()
-useContext() */

import React, { useState, useContext } from "react";

/*@returns componente 1 
    dispone de un contexto
    que va a tener valor
    que recibe desde el padre
*/
const miContexto = React.createContext(null);
const Componente1 = () => {
  const state = React.useContext(miContexto);
  //Iniciamos un estado vacio que va a rellenarse
  //con los datos del contexto del padre

  return (
    <div>
      <h1>el Token es:{state.token}</h1>

      {/*Pintamos componente 2*/}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = React.useContext(miContexto);
  return (
    <div>
      <h2>La Sesion es:{state.sesion}</h2>
    </div>
  );
};

export default function MicomponenteConTexto() {
  const estadoInicial = {
    token: "it`s my token",
    sesion: 1,
  };
  //Creamos el estado del componente
  const [sessionData, setSesionData] = useState(estadoInicial);
  function actualizarSesion() {
    setSesionData({
      token: "random()aleatory",
      sesion: sessionData.sesion + 1,
    });
  }
  return (
    <div>
      <miContexto.Provider value={sessionData}>
        {/*Todo lo que esta aqui dentro se puede leer 
        los datos de sessionData()/*}
        /*{ Además,sí actualiza, los componentes de aqui tambien lo actualizan */}
        <h1>***Ejemplo de useState() y useContext()***</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualiza Aqui</button>
      </miContexto.Provider>
    </div>
  );
}
