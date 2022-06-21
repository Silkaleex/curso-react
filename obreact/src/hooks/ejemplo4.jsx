/* Ejemplo para enternder el uso de props.children */
import React from "react";

function Ejemplo4(props) {
  return (
    <div>
      <h1>***Ejemplo de Children.Props***</h1>
      <h2>NOMBRE:{props.nombre}</h2>
      {/*props.children Pintara todo aquello 
      por defecto aquello que se encuentre entre 
      las etiquetas de apertura y cierre 
      de este componente,
      desde el orden del componente superior*/}
      {props.children}
    </div>
  );
}
export default Ejemplo4;
