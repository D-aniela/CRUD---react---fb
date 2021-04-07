import React, { useEffect, useState } from "react";
// useEffect sirve para manejar el componente cuando cambia o cuando
// el componente es combinado

import LinkForm from "./LinkForm";

import { db } from "../firebase";

const Links = () => {
  const [links, setLinks] = useState([]);

  // Función con evento síncrono
  const addOrEditLink = async (linkObject) => {
    // Mientras se guardan los datos queremos que se vaya realizando otro código
    await db.collection("links").doc().set(linkObject);
    console.log("New task added");
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      await db.collection("links").doc(id).delete();
      console.log("task deleted");
    }
  };

  // Función que realiza una petición a FireBase
  const getLinks = async () => {
    // querySnapshot es la respuesta que nos da FireBase
    // onSnapshot recibe una función como parámetro

    // Ya no se necesita porque se convierte en un evento*** */ const querySnapshot = await
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];

      querySnapshot.forEach((doc) => {
        // al docs se le añadira un elemento nuevo
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <div className="col-md-4 p-2">
        <LinkForm addOrEditLink={addOrEditLink} />
      </div>
      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <i
                  className="material-icons text-danger"
                  onClick={() => onDeleteLink(link.id)}
                >
                  close
                </i>
              </div>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noreferrer">
                Go to Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
