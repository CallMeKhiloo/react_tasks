import { BrowserRouter } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/homepage/Home";
import Products from "./components/products/Products";
import CertainProduct from "./components/products/CertainProduct";
import NotFound from "./components/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<CertainProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
