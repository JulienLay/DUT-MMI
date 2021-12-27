import React from "react";
import { TextField } from "@material-ui/core";

export default class ToDoForm extends React.Component {
  // recup de la liste des choses à afficher
  state = { texte: "" };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.texte);

    if (this.state.texte !== "") {
      this.props.handlerA(this.state.texte);
      this.setState({ texte: "" });
    }
  };
  handleChange = (event) => {
    this.setState({ texte: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          label="Chose à faire"
          value={this.state.texte}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
