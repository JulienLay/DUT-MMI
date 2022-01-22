import { Button, TextField } from "@material-ui/core";
import Produit from "/src/Produit.js";
import React, { useState } from "react";

function FrigoForm(props) {
  const [nom, setNom] = useState("");
  const [qte, setQte] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nom);

    if (nom !== "") {
      let produit = { nom: nom, qte: qte };
      props.handlerP(produit);
      setNom("");
      setQte("");
    }
  };

  const handleChangeNom = (event) => {
    setNom(event.target.value);
  };

  const handleChangeQte = (event) => {
    setQte(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          label="nom *"
          type="text"
          value={nom}
          onChange={handleChangeNom}
        />
        <TextField
          variant="standard"
          label="qte *"
          type="number"
          value={qte}
          onChange={handleChangeQte}
        />
        <Button type="submit" disabled={nom ? false : true} label="Valider">
          Valider
        </Button>
      </form>
    </div>
  );
}

export default FrigoForm;
