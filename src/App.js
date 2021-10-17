import { useState } from "react";

import "./styles.css";
import { ComponenteClase } from "./ComponenteClase";
import { ErrorBoundary } from "./ErrorBoundary";

//import 'RutaAMiArchivoCSS'

import { CualquierNombre } from "./Componente/index";
import Ejercicio1 from "./Ejercicio1/Ejercicio1";
import Ejercicio2 from "./Ejercicio2/";

export default function App() {
  const [mensaje, setMensaje] = useState("Hola amigos!");

  //let mensaje = "Mensajes de App";
  const changed = (e) => {
    setMensaje(e.target.value);
  };

  let pantalla = "Ejercicio 2";

  let vista =
    pantalla === "Ejercicio 1" ? (
      <>
        <h1>Ejercicio1</h1>
        <Ejercicio1 />
      </>
    ) : (
      <>
        <h1>Ejercicio2</h1>
        <Ejercicio2 />
      </>
    );

  return (
    <div className="App">
      <ComponenteClase />
      <h1 className="mensaje" onClick={() => console.log("Click")}>
        Hello CodeSandbox
      </h1>
      <input type="text" onChange={changed} value={mensaje} />
      <CualquierNombre mensaje={mensaje} />

      <CualquierNombre mensaje="Adiós amigos"></CualquierNombre>

      <ErrorBoundary>
        <ComponenteClase />
      </ErrorBoundary>

      {vista}
    </div>
  );
}
