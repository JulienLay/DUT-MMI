import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import ReactAudioPlayer from "react-audio-player";

function AffichDetailAlbum(props) {
  const [album, setAlbums] = useState(null);

  useEffect(() => {
    if (props.idAlbum !== "") {
      getDetailAlbum(props.idAlbum);
    }
  }, [props.idAlbum]);

  const getDetailAlbum = (id) => {
    const spotifyUrlSearchAlbum = ` https://api.spotify.com/v1/albums/`; // l’url de la ressource
    const token =
      "BQCRyxaOXNoBf_0jFzCCFQyspoxPtrSsJEQw9GZEZ3QnksOy-wp9X2aBelsmw-xuJh2WbWg9wOwzQaD2jPqX7sWVoTWWtW49pnNzWJE44S8Yv7zH8aB9MBtcW_C5RoBUAhJlK3x-Jvs";
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };
    fetch(spotifyUrlSearchAlbum + id, fetchOptions)
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
        <Card key={props.idAlbum}>
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
