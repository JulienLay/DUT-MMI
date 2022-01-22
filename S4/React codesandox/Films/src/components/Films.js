import FormTexte from "./FormTexte";
import AffichListFilms from "./AffichListFilms";
import React, { useState } from "react";

function Films() {
  const [critere, setCritere] = useState("");

  const handlerAddItem = (c) => {
    setCritere(c);
  };

  return (
    <div>
      <h3>Films</h3>
      <ul>
        <FormTexte handlerA={handlerAddItem}></FormTexte>
        <AffichListFilms cri={critere}></AffichListFilms>
      </ul>
    </div>
  );
}

export default Films;
