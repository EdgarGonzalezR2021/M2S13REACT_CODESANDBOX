import { useState } from "react";

import ComponentWeight from "./ComponentWeight";

const Ejercicio1 = () => {
  const [weight, setWeight] = useState(900);

  const updateWeight = (newWeight) => {
    setWeight(newWeight);
  };

  return (
    <>
      {" "}
      {/* React.Fragment */}
      <ComponentWeight weight={weight} updateWeight={updateWeight} />
      <h1
        style={{
          fontWeight: weight
        }}
      >
        Hola
      </h1>
    </>
  );
};

export default Ejercicio1;
