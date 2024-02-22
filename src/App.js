import "./App.css";
import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Poster />
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
