import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function FormTexte(props) {
  const [texte, setTexte] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (texte !== "") {
      props.handlerA(texte);
      setTexte("");
    }
  };
  const handleChange = (event) => {
    setTexte(event.target.value);
  };

  return (
    <form>
      {/* <label>Recherche : </label> */}
      {/* <input type="text" value={texte} onChange={handleChange} /> */}

      <TextField
        variant="standard"
        label="Album à chercher"
        value={texte}
        onChange={handleChange}
      />
      {/* <input type="submit" value="Rechercher" onClick={handleSubmit} /> */}
      <Button type="submit" value="Rechercher" onClick={handleSubmit}>
        Rechercher
      </Button>
    </form>
  );
}

export default FormTexte;
