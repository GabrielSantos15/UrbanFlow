import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App.jsx";
import { CartUIProvider } from "./context/CartUIContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <CartUIProvider>
          <App />
        </CartUIProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);
