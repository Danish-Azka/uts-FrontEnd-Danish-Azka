import React from "react";

const ModalProductDetail = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[500px] p-5 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">{product.nama}</h2>
        <img
          src={product.gambar}
          alt={product.nama}
          className="w-full h-[250px] object-cover rounded-lg mb-3"
        />
        <p className="text-gray-700 text-sm mb-2">{} {product.Shop?.nama}</p>
        <p className="text-gray-600 mb-3">{product.deskripsi}</p>
        <span className="text-lg font-bold text-gray-900">
          IDR {product.harga.toLocaleString()}
        </span>

        <div className="mt-4 flex justify-between">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
            Add to Favorite
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Order Now
          </button>
        </div>

        <button
          className="mt-4 w-full text-red-600 hover:underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalProductDetail;
