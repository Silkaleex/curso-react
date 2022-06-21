import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "./contacto.class";
import Componente2 from "./componente2";
function componente1({ contacto }) {
  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellidos: {contacto.apellido}</h2>
      <h2>Email: {contacto.email}</h2>
      <h5>
        <Componente2 estado={true} />
      </h5>
    </div>
  );
}
componente1.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default componente1;
