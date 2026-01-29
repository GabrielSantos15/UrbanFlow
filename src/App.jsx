import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";
import CartSidebar from "./components/CartSidebar";
import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./Pages/Checkout";

function App() {

  return (
    <>
      <Header></Header>
      <CartSidebar></CartSidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
