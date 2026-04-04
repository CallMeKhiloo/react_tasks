import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div>
        <div
          className={`${
            product.availabilityStatus === "In Stock"
              ? "bg-green-500"
              : product.availabilityStatus === "Out of Stock"
                ? "bg-red-500"
                : "bg-yellow-500"
          } text-white px-4 py-2 rounded-md mb-4 w-max`}
        >
          {product.availabilityStatus}
        </div>
        <NavLink to={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
        </NavLink>
      </div>
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-green-500">
          ${product.price}
        </span>
        <button className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow cursor-pointer ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    }
    fetchProducts();
  }, []);

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
