import React, { useState } from "react";

// useState, crear el estado de la aplicación
// El estado son datos que pertenecen a un componente

const LinkForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };

  // Se define el estado
  const [values, setValues] = useState(initialStateValues);

  // Función que cada que se escribe en el input se actualiza el estado
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Crear una función para controlar el formulario
  //handleSubmit recibe información del evento
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditLink(values);
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          name="name"
          placeholder="Website name"
        />
      </div>

      <div className="form-group">
        <textarea
          onChange={handleInputChange}
          name="description"
          rows="3"
          className="form-control"
          placeholder="Write description"
        ></textarea>
      </div>

      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
};

export default LinkForm;
