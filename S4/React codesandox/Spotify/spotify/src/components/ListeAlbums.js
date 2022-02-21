import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

function AffichListAlbums(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (props.que !== "") {
      getAlbums(props.que);
    }
  }, [props.que]);

  const getAlbums = (search) => {
    const spotifyUrlSearchAlbum = `https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=`; // l’url de la ressource
    const token =
      "BQCRyxaOXNoBf_0jFzCCFQyspoxPtrSsJEQw9GZEZ3QnksOy-wp9X2aBelsmw-xuJh2WbWg9wOwzQaD2jPqX7sWVoTWWtW49pnNzWJE44S8Yv7zH8aB9MBtcW_C5RoBUAhJlK3x-Jvs";
    const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };
    fetch(spotifyUrlSearchAlbum + search, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // console.log(dataJSON);
        // console.log(dataJSON.albums.items.id);
        setAlbums(dataJSON.albums.items);
      });
  };

  return (
    <div>
      <p>Albums : {props.que}</p>
      <ul>
        {albums.map((details) => {
          return (
            <li>
              <Card>
                <CardMedia />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <p>{details.name}</p>
                    {/* <p>{details.id}</p> */}
                    {<img src={details.images[0].url} alt="Affiche" />}
                  </Typography>
                </CardContent>
              </Card>
              <Button
                type="submit"
                value="Afficher l'album"
                onClick={() => props.handlerB(details.id)}
              >
                Afficher l'album
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AffichListAlbums;
