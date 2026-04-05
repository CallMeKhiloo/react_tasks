import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

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
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow cursor-pointer "
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
