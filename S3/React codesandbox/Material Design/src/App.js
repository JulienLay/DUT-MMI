import React from "react";
import "./styles.css";
import { Container, CssBaseline } from "@material-ui/core";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Chose from "./Chose";

export default class App extends React.Component {
  state = {
    liste: [new Chose("Ménage"), new Chose("Vaiselle", true)]
  };

  render() {
    return (
      <Container className="App">
        <CssBaseline></CssBaseline>
        <Container className="App-header">
          <h1>Ma TodoList</h1>
        </Container>
        <Container className="App-content">
          <ToDoForm handlerA={this.handlerAddItem}></ToDoForm>
          <ToDoList
            handlerD={this.handlerDelete}
            handlerF={this.handlerFaire}
            choses={this.state.liste}
          ></ToDoList>
        </Container>
        <Container className="App-footer">&copy; Julien LAY</Container>
      </Container>
    );
  }

  handlerFaire = (chose) => {
    let l = [...this.state.liste]; // recopie du tableau
    let pos = l.indexOf(chose); // modif de la copie
    if (pos !== -1) l[pos].faire();
    this.setState({ liste: l }); // modif du state
  };
  handlerDelete = (chose) => {
    let l = [...this.state.liste.filter((v) => v !== chose)];
    this.setState({ liste: l });
  };
  handlerAddItem = (chose) => {
    let l = [...this.state.liste];
    l.push(new Chose(chose));
    this.setState({ liste: l });
  };
}
