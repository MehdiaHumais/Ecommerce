import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-lg transition-all">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white">
          TechTrove
        </Link>
        <ul className="flex gap-6 items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="relative">
            <Link to="/cart">
              🛒
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
