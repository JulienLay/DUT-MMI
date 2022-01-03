import React from "react";
import FormTexte from "./FormTexte";
import AffichMeteo from "./AffichMeteo";

export default class MeteoVille extends React.Component {
  state = { ville: "" };

  handlerAddItem = (v) => {
    this.setState({ ville: v });
  };

  render() {
    return (
      <div>
        <h3>API Meteo</h3>
        <ul>
          <FormTexte handlerA={this.handlerAddItem}></FormTexte>
          <AffichMeteo vil={this.state.ville}></AffichMeteo>
        </ul>
      </div>
    );
  }
}
