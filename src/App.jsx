import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
