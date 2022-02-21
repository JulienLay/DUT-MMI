import React from "react";

import ListeChanteurs from "./ListeChanteurs";
import FormTexte from "./FormTexte";

export default function Chanteurs(props) {
  return (
    <div>
      <h1>Chanteurs.js</h1>
      <FormTexte></FormTexte>
      <ListeChanteurs></ListeChanteurs>
    </div>
  );
}
