import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/banner.png';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find the best products at the best prices! Browse through our wide collection and choose what suits you best.
          </p>

          {/* Shop Now Button */}
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>


        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Home Banner"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
