import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import AuthContext from "../../context/Auth/AuthContext";
import { useNavigate } from "react-router";

const Products = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }
    fetchProducts();
  }, []);

  if (!user) {
    navigate("/register");
    return <div className="container mx-auto px-4 py-8">loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
