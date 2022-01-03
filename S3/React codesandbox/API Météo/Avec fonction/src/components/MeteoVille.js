import FormTexte from "./FormTexte";
import AffichMeteo from "./AffichMeteo";
import React, { useState } from "react";

function MeteoVille() {
  const [ville, setVille] = useState("");

  const handlerAddItem = (v) => {
    setVille(v);
  };

  return (
    <div>
      <h3>API Meteo</h3>
      <ul>
        <FormTexte handlerA={handlerAddItem}></FormTexte>
        <AffichMeteo vil={ville}></AffichMeteo>
      </ul>
    </div>
  );
}

export default MeteoVille;
