import "./App.css";
import Intro from "./Intro.tsx";
import Nav from "./Nav.tsx";
import Work from "./Work.tsx";
import Contact from "./Contact.tsx";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <Nav />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
