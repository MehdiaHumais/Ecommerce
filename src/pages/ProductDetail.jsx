import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div className="text-center text-red-500 mt-10">Product not found</div>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="w-full h-full flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto object-contain shadow-lg rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{product.description}</p>
          <p className="text-xl">
            <span className="font-semibold">Color:</span> {product.color}
          </p>
          <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">${product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition"
          >
            Add to Cart
          </button>

          {/* Back to Products Button */}
          <Link
            to="/products"
            className="inline-block mt-4 px-6 py-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
