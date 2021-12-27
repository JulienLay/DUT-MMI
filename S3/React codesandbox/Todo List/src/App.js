import React from "react";
import ToDoHeader from "./components/ToDoHeader";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Chose from "./Chose";
import "./styles.css";

class App extends React.Component {
  state = { liste: [new Chose("menage"), new Chose("Vaiselle")] };

  render() {
    return (
      <div className="App">
        <ToDoHeader></ToDoHeader>
        <ToDoList
          handlerD={this.handlerDelete}
          handlerF={this.handlerFaire}
          choses={this.state.liste}
        ></ToDoList>
        <ToDoForm handlerA={this.handlerAddItem}></ToDoForm>
      </div>
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

export default App;
