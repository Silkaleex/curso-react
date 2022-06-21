/*  Ejemplo de uso UseState
    Crear componente de tipo funcion 
    y acceder a su estado privado
    a traves de un Hook  y ademas poder Modificarlo
 */

import React, { useState } from "react";

export default function Ejemplo1() {
  //Valor iniciar para un contador
  const valorInicial = 0;
  //Valor inicial para una persona
  const personaInicial = {
    nombre: "Silkaleex",
    email: "alejandropascualsanchez@gmail.com",
  };
  /*Queremos que el valorInicial y personaInicial
    sean parte del componente y
    asi poder ver su cambio y que sea reflejado en 
    la vista del componente
    const [nombreVariable, funcionParaCambiar] = useState(valorInicial) */
  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);
  /*Funcion para actualizar el estado privado que contiene el contador */
  function incrementarContador() {
    /*? functionParaCambiar(nuevoValor)  */
    setContador(contador + 1);
  }

  function actualizarPersona(nombre) {
    setPersona({
      nombre: "Nami",
      email: "correodeNami@gmail.com",
    });
  }
  return (
    <div>
      <h1>Ejemplo de UseState() ****</h1>
      <h2>CONTADOR:{contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>NOMBRE:{persona.nombre}</h3>
      <h4>EMAIL:{persona.email}</h4>
      {/*Bloque de botones para actualizar el estado */}
      <button onClick={incrementarContador}>Incremento de contador</button>
      <button onClick={actualizarPersona}>actualizarPersona</button>
    </div>
  );
}
