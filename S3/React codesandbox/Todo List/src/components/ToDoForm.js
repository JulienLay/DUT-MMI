import React from "react";

export default class ToDoForm extends React.Component {
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
        <label>
          Chose :
          <input
            type="text"
            value={this.state.texte}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
