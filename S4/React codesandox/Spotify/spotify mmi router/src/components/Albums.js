import React, { useState } from "react";

import ListeAlbums from "./ListeAlbums";
import FormTexte from "./FormTexte";

export default function Albums(props) {
  const [query, setQuery] = useState("");

  const handlerDetails = (c) => {
    setQuery(c);
  };

  return (
    <div>
      <h1>Album.js</h1>
      <FormTexte handlerA={handlerDetails}></FormTexte>
      <ListeAlbums que={query}></ListeAlbums>
    </div>
  );
}
