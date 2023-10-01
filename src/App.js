import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/Navbar";
import Home from "./component/Home";
import Colors from "./component/Colors";
import About from "./component/About";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color" element={<Colors />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;