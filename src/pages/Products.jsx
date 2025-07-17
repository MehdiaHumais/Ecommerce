import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";

export default function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="pt-24 pb-16 px-6 bg-white dark:bg-gray-950 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg transition duration-300 hover:shadow-2xl hover:scale-[1.03] hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300 hover:shadow-blue-400/40 dark:hover:shadow-blue-500/30 shadow-md dark:shadow-none"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Rs. {product.price}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {product.description}
              </p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-sm hover:shadow-lg transition duration-200 w-full mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
