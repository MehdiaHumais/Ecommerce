import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg">
          Cart is empty.{" "}
          <Link to="/products" className="text-blue-500 underline">
            Browse products
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 p-5 rounded-lg flex justify-between items-center shadow dark:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Rs. {item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <Link
            to="/products"
            className="inline-block mt-6 text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
          >
            Back to Products
          </Link>
        </div>
      )}
    </div>
  );
}
