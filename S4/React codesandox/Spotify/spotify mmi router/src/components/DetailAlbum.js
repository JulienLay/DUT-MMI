import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";

function AffichDetailAlbum() {
  const [album, setAlbums] = useState(null);

  const { idAlbum } = useParams();
  console.log(idAlbum);
  useEffect(() => {
    if (idAlbum !== "") {
      console.log(idAlbum);
      getDetailAlbum(idAlbum);
    }
  }, [idAlbum]);

  const getDetailAlbum = (id) => {
    console.log(id);
    const spotifyUrlSearchAlbum = ` https://api.spotify.com/v1/albums/`; // l’url de la ressource
    const token =
      "BQCe8priDLbkkZIv6dCSgnJ_X3d-kVOeVJ0c3HNto6663wPlcHNn1m7ROG93mkOkSI0x1W7X9LGO-xgtKGSCQ043xTVfueg9NFJ5UkX9BPLnZjqo65STYFhi0xXZH_V9KcWdy1luYlg";
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };
    fetch(spotifyUrlSearchAlbum + idAlbum, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // console.log(dataJSON);
        console.log(album);
        console.log(dataJSON);
        setAlbums(dataJSON);
      });
  };
  // console.log(album);
  if (album)
    return (
      <div>
        <Card key={idAlbum}>
          <CardMedia />
          <CardContent>
            <Typography variant="h5" component="h2">
              <p>{album.name}</p>
              {<img src={album.images[0].url} alt="Affiche" />}
              <ul>
                {album.tracks.items.map((track) => {
                  return (
                    <li id="tracks">
                      {track.name}
                      <ReactAudioPlayer
                        src={track.preview_url}
                        controls
                        volume={0.15}
                      />
                    </li>
                  );
                })}
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  else return <div></div>;
}

export default AffichDetailAlbum;
