import FormTexte from "./FormTexte";
import ListeAlbums from "./ListeAlbums";
import React, { useState } from "react";
import DetailAlbum from "./DetailAlbum";

function Spotify() {
  const [query, setQuery] = useState("");
  const [idAlbum, setIdAlbum] = useState("");

  const handlerDetails = (c) => {
    setQuery(c);
  };

  const handlerIdAlbum = (c) => {
    setIdAlbum(c);
  };

  return (
    <div>
      <h3>Appli Spotify</h3>
      <ul>
        <FormTexte handlerA={handlerDetails}></FormTexte>
        <ListeAlbums que={query} handlerB={handlerIdAlbum}></ListeAlbums>
        <DetailAlbum idAlbum={idAlbum}></DetailAlbum>
      </ul>
    </div>
  );
}

export default Spotify;
