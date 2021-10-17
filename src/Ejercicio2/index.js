import { useState } from "react";
import FormPaciente from "./FormPaciente";
import Ejercicio1 from "../Ejercicio1/Ejercicio1";

const Ejercicio2 = () => {
  const [pacientes, setPacientes] = useState([
    {
      nombre: "Adrian",
      apellido: "Becerra",
      edad: 20
    },
    {
      nombre: "Saúl",
      apellido: "Martinez",
      edad: 12
    },
    {
      nombre: "Samuel",
      apellido: "Godinez",
      edad: 17
    },
    {
      nombre: "Miriam",
      apellido: "Gutierrez",
      edad: 35
    },
    {
      nombre: "Paola",
      apellido: "Perez",
      edad: 56
    },
    {
      nombre: "Fabila",
      apellido: "Reyes",
      edad: 75
    },
    {
      nombre: "Manuel",
      apellido: "Gonzalez",
      edad: 80
    }
  ]);

  const updatePacientes = (newPaciente) => {
    /* newPaciente=
    {nombre: "asdf", apellido: "asdf", edad: 2} */
    /* const newArray = [...pacientes];
    newArray.push(newPaciente); */

    setPacientes([...pacientes, newPaciente]);
  };

  const listaPacientes = pacientes.map((element, i) => {
    return (
      <li key={i}>
        {element.nombre} {element.apellido} - {element.edad}
      </li>
    );
  });

  /*   let vistaPacientes = null;

  if (paci<>
      Pacientes:
      <ul>{listaPacientes}</ul>
    </>;
    vistaP<>
      Pacientes:
      <ul>{listaPacientes}</ul>
    </>;es</h1>;
  } else {<>
      Pacientes:
      <ul>{listaPacientes}</ul>
    </>;
    vistaPacientes = (
      <>
        Pacientes:
        <ul>{listaPacientes}</ul>
      </>
    );
  } */

  /* const vistaPacientes = (condicion)?valorSiEsTrue:valorSiEsFalse; */

  let a = 0;
  const vistaPacientes =
    pacientes.length === 0 ? (
      <h1
        className={a === 0 ? "red" : "blue"}
        style={{
          color: a === 0 ? "red" : "blue"
        }}
      >
        No hay pacientes
      </h1>
    ) : (
      <>
        <FormPaciente
          updatePacientes={updatePacientes}
          Componente={Ejercicio1}
        />
        <br />
        Pacientes:
        <ul>{listaPacientes}</ul>
      </>
    );

  return vistaPacientes;
};

export default Ejercicio2;
