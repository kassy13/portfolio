import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Projects from "./components/main/Projects";
import Contact from "./components/main/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
