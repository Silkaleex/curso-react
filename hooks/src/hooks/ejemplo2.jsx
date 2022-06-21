/*
Ejemplos de uso de:
*- useState()
*- useRef()
*- useEffect()
*/

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //Dos contadores distintos, cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  //Vamos a crear una referencia
  //para asociar a una variable
  //con un elemento del DOM
  const miRef = useRef();
  function incrementarUno() {
    setContador1(contador1 + 1);
  }
  function incrementarDos() {
    setContador2(contador2 + 1);
  }

  /*Trabajando con useEffect()
   *? Caso1: Ejecutar siempre un snippet de codigo
   *cada vez que haya un cambio en el estado  
    del componente se ejecuta dentro del useEffect()
   */
  //   useEffect(() => {
  //     console.log("Cambio en el estado del componente");
  //     console.log("Mostrando referencia a objeto Dom");
  //     console.log(miRef);
  //   });

  /*? Caso 2: Ejecutar cuando solo cambie el contador 1,
        en caso de que haya un cambio en contador 1 
        se ejecutara lo que diga el useEffect()
        en caso de que cambie el contador 2 no habra ejecucion
   */
  //   useEffect(() => {
  //     console.log("Cambia el componente 1");
  //     console.log("Mostrando referencia a objeto Dom");
  //     console.log(miRef);
  //   }, [contador1]);

  /*? caso 3: Ejecutar solo cuando cambie contado1 o contado2
        Cada vez que haya un cambio en contador 1,
        se ejecuta lo que diga el useEffect()
        Cada vez que haya un cambio en contador 2, 
        se ejecuta lo que diga el useEffect()
        */

  useEffect(() => {
    console.log("Cambia el componente 1/componente 2");
    console.log("Mostrando referencia a objeto Dom");
    console.log(miRef);
  }, [contador1, contador2]);
  return (
    <div>
      <h1>*** Ejemplo useState(), useRef(), useEffect()***</h1>
      <h2>CONTADOR 1:{contador1}</h2>
      <h2>CONTADOR 2:{contador2}</h2>
      {/*Elemento Referenciado */}
      <h4 href={miRef}>Ejemplo de Elemento referenciado</h4>
      {/*Botones para cambiar los contadores*/}
      <div>
        <button onClick={incrementarUno}>Incremento de Contador 1</button>
        <button onClick={incrementarDos}>Incremento de Contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
