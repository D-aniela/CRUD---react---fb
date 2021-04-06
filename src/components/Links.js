import React from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

const Links = () => {
  // Función con evento síncrono
  const addOrEditLink = async (linkObject) => {
    // Mientras se guardan los datos queremos que se vaya realizando otro código
    await db.collection("links").doc().set(linkObject);
    console.log("New task added");
  };

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink} />
      <h1>Links</h1>
    </div>
  );
};

export default Links;
