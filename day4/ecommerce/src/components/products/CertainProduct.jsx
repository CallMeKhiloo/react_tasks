import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const CertainProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setItem(response.data);
    }
    fetchProduct();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {item ? (
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full md:w-1/3 h-auto object-cover rounded-md"
            />
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <span className="text-xl font-bold text-green-500">
                ${item.price}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CertainProduct;
