import React, { useState } from "react";
import PropTypes from "prop-types";

function Componente2(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h3>
        {conectado === false ? "Contacto no disponible" : "Contacto En linea"}
      </h3>
      <button onClick={() => setConectado(!conectado)}>
        {conectado === false ? "Conectado" : "Desconectado"}
      </button>
    </div>
  );
}

Componente2.propTypes = {
  estado: PropTypes.bool,
};

export default Componente2;
