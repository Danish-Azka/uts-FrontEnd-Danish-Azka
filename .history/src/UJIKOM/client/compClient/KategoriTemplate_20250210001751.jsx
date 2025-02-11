import React, { useState, useEffect } from 'react';
import NavCLient from './NavCLient';
import { getProduct } from '../../../service/apiProduct';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={product.image} alt={product.name} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < product.rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const KategoriTemplate = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProduct();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-[#f5f5f5]">
      <div>
        <div className="sticky z-50 top-0 left-0 right-0">
          <NavCLient />
        </div>

        <div className="w-full p-5 h-[350px] gap-3 flex justify-center items-center">
          <div className="w-8/12 h-full bg-yellow-500 rounded-lg">
            <div className="h-1/6 w-full bg-red-500 flex justify-between items-center px-3">
              <p className="font-bold text-xl">G E A R U P</p>
            </div>
          </div>
        </div>

        <div className="w-full p-5 flex flex-wrap gap-5 justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          )}
        </div>
      </div>
    </div>
  );
};
