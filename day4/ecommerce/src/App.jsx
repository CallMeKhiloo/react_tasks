import { BrowserRouter } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/homepage/Home";
import Products from "./components/products/Products";
import CertainProduct from "./components/products/CertainProduct";
import NotFound from "./components/notfound/NotFound";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import LanguageContext from "./context/LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<CertainProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
