import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      "BQCe8priDLbkkZIv6dCSgnJ_X3d-kVOeVJ0c3HNto6663wPlcHNn1m7ROG93mkOkSI0x1W7X9LGO-xgtKGSCQ043xTVfueg9NFJ5UkX9BPLnZjqo65STYFhi0xXZH_V9KcWdy1luYlg";
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
        console.log(dataJSON);
        // console.log(dataJSON.albums.items.id);
        setAlbums(dataJSON.albums.items);
      });
  };

  return (
    <div>
      <p>Albums : {props.que}</p>
      <ul>
        {albums.map((details) => {
          let idAlbum = `/detailAlbum/${details.id}`;
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
              <Link to={idAlbum}>Détails</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AffichListAlbums;
