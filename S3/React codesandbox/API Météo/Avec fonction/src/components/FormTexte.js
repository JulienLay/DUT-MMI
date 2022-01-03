import React, { useState } from "react";

function FormTexte(props) {
  const [texte, setTexte] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(texte);

    if (texte !== "") {
      props.handlerA(texte);
      setTexte("");
    }
  };
  const handleChange = (event) => {
    setTexte(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Ville : </label>
      <input type="text" value={texte} onChange={handleChange} />
      <input type="submit" value="Rechercher" />
    </form>
  );
}

export default FormTexte;
