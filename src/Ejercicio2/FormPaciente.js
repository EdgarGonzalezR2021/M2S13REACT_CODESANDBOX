function FormPaciente({ updatePacientes, Componente }) {
  const onSubmited = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    dataObject.edad = +dataObject.edad;
    updatePacientes(dataObject);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onSubmited}>
        <label>Nombre</label>
        <input type="text" name="nombre" />
        <br />
        <label>Apellido</label>
        <input type="text" name="apellido" />
        <br />
        <label>Edad</label>
        <input type="number" name="edad" />
        <br />
        <input type="submit" value="Guardar" />
      </form>
      <h1>Ejercicio 1</h1>
      <Componente />
      <h1>Ejercicio 1</h1>
    </>
  );
}

export default FormPaciente;
