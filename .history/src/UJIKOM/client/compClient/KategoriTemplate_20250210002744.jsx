import React, { useState, useEffect } from 'react';
import NavCLient from './NavCLient';
import { getProduct } from '../../../service/apiProduct';

const ProductCard = ({ product }) => {
  return (
    <div className="h-[350px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className=" rounded-t-lg" src={product.gambar} alt={product.nama} />
      <div className="px-5 pb-5">
          <h5 className="text-l font-semibold tracking-tight text-gray-900 dark:text-white">{product.nama}</h5>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1">
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-l font-bold text-gray-900 dark:text-white">IDR {product.harga.toLocaleString()}</span>
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

    <div className="w-full  h-fit gap-3 flex justify-center items-center">
      <div className="w-10/12 h-full bg-yellow-500 rounded-lg p-3">
        <div className="grid grid-cols-3 gap-4 w-full h-full">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          )}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};
