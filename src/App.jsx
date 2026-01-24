import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
