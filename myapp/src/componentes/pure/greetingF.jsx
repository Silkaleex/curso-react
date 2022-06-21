import React, { useState } from "react";
import PropTypes from "prop-types";

const Greetingf = (props) => {
  /*brebe intrudccion a use State*/
  //const [variable, metodo para actualizarlo] = useState(valor inicial)
  const [age, setage] = useState(27);
  const birthday = () => {
    setage(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name} Desde Componente Funcional!!</h1>
      <h2>Tu edad es de: {age} años</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

Greetingf.propTypes = {
  name: PropTypes.string,
};

export default Greetingf;
