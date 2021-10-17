import React from "react";

const ComponenteFuncionFlecha = () => {
  /* afasf */
  return <h1>Objeto JSX</h1>;
};

function ComponenteFuncion() {
  return <h1>Objeto JSX</h1>;
}

class ComponenteClase extends React.Component {
  a;
  render() {
    return <h1>Objeto JSX En Clase</h1>;
  }
}

export { ComponenteClase };
