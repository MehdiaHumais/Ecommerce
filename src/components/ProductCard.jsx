import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(product);
    navigate("/cart"); // redirect to cart
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-xl rounded p-4 transition">
  <h2 className="text-lg font-bold">Product Name</h2>
  <p className="text-sm">This is a test product.</p>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">${product.price}</p>
        <button
          onClick={handleAdd}
          className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
