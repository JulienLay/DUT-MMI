import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

function AffichListFilms(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (props.cri !== "") getFilm(props.cri);
  }, [props.cri]);

  const getFilm = (critere) => {
    const apiKey = "3665ec2ac101e47e4e29ad12fc9f17e1";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&page=1&query=${critere}`; // l’url de la ressource
    let fetchOptions = { method: "GET" }; // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // dataJSON = les données renvoyées
        console.log(dataJSON.results); // ici le traitement des données …
        // pour affichage dans le navigateur
        setFilms(dataJSON.results);
        // console.log(this.props.ville);
      })
      .catch((error) => {
        // gestion des erreurs
        console.log(error);
      });
  };

  return (
    <div>
      <p>Critères : {props.cri}</p>
      <ul>
        {films.map((film) => {
          return (
            <li>
              <Card style={{ width: "500px" }}>
                <CardMedia style={{ height: "100px" }} />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    <p>{film.title}</p>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                      alt="Affiche"
                    />
                  </Typography>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AffichListFilms;
