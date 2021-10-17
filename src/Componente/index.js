/* import React from 'react' */
const CualquierNombre = ({ mensaje, numero, funcion }) => {
  //const { mensaje, numero, funcion } = props;
  //funcion();
  return <h1>{mensaje}</h1>;
};

const varible = "Nombre";

const imprimirMensaje = () => console.log("hola");

export { CualquierNombre, varible, imprimirMensaje };
