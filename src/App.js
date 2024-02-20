import "./App.css";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Poster />
      <Skills />
    </div>
  );
}

export default App;
