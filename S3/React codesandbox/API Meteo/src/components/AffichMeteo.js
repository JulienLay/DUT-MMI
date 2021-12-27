import React from "react";

export default class AffichMeteo extends React.Component {
  state = { temperature: "", nom: "", logo: "", pays: "" };

  componentDidMount() {
    this.getMeteo(this.props.vil);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getMeteo(this.props.vil);
    }
  }

  getMeteo(ville) {
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
        this.setState({ temperature: dataJSON.main.temp });
        this.setState({ nom: dataJSON.name });
        this.setState({ logo: dataJSON.weather[0].icon });
        this.setState({ pays: dataJSON.sys.country });
        // console.log(this.props.ville);
      })
      .catch((error) => {
        // gestion des erreurs
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>Température : {this.state.temperature} °C</p>
        <p>
          Ville : {this.state.nom}, {this.state.pays}
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${this.state.logo}.png`}
          alt="Temps"
        />
      </div>
    );
  }
}
