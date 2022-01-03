import React, { useEffect, useState } from "react";

function AffichMeteo(props) {
  const [temperature, setTemperature] = useState("");
  const [nom, setNom] = useState("");
  const [logo, setLogo] = useState("");
  const [pays, setPays] = useState("");

  useEffect(() => {
    getMeteo(props.vil);
  }, []);

  useEffect(() => {
    getMeteo(props.vil);
  }, [props.vil]);

  const getMeteo = (ville) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=2d640f4e6f07ce5a144f1e324e45dc45&units=metric&lang=fr`; // l’url de la ressource
    let fetchOptions = { method: "GET" }; // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // dataJSON = les données renvoyées
        console.log(dataJSON.main.temp); // ici le traitement des données …
        // pour affichage dans le navigateur
        setTemperature(dataJSON.main.temp);
        setNom(dataJSON.name);
        setLogo(dataJSON.weather[0].icon);
        setPays(dataJSON.sys.country);
        // console.log(this.props.ville);
      })
      .catch((error) => {
        // gestion des erreurs
        console.log(error);
      });
  };

  return (
    <div>
      <p>Température : {temperature} °C</p>
      <p>
        Ville : {nom}, {pays}
      </p>
      <img src={`http://openweathermap.org/img/wn/${logo}.png`} alt="Temps" />
    </div>
  );
}

export default AffichMeteo;
