import "./styles.css";
import Frigo from "./components/Frigo";

export default function App() {
  let prenom = "Julien";
  return (
    <div className="App">
      <h1>Bonjour {prenom}, bienvenue dans ton frigo !</h1>
      <Frigo></Frigo>
    </div>
  );
}
