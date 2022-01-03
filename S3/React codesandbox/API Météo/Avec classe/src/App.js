import React from "react";
import MeteoVille from "./components/MeteoVille";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MeteoVille></MeteoVille>
      </div>
    );
  }
}
