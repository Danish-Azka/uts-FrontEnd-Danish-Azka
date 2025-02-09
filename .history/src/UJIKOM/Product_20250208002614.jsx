import React, { useState } from 'react';
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';
import { Navbar } from '../component/Navbar';
import { Trash2, PlusCircle } from "lucide-react";

const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Oli Mesin Motul", price: "120000", category: "Mesin", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Busi NGK Iridium", price: "50000", category: "Kelistrikan", image: "https://via.placeholder.com/100" },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", image: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProduct = () => {
    if (newProduct.name && newProduct.price) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: "", price: "", category: "", image: "" });
      setIsModalOpen(false);
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Secondside menuItems={shopMenu} />
      </div>
      <div className='w-[84%] h-screen'>
        <Navbar />
        <div className='flex flex-col items-center justify-center py-3'>
          <div className='bg-[#E9EAEC] h-[685px] w-11/12'>
            <div className='w-full h-14 flex justify-center items-center bg-[#1D1E20]'>
              <p className='text-center text-3xl font-semibold text-[#E9EAEC]'>Product's</p>
            </div>
            <div className='w-full p-4'>
              {/* Tombol Tambah Produk */}
              <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <PlusCircle className="mr-2" /> Tambah Produk
              </button>

              {/* Modal Tambah Produk */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white p-6 rounded shadow-lg w-96">
                    <h2 className="text-lg font-semibold mb-4">Tambah Produk Baru</h2>
                    <input type="text" placeholder="Nama Produk" className="w-full border p-2 mb-2" 
                      value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
                    />
                    <input type="number" placeholder="Harga" className="w-full border p-2 mb-2"
                      value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
                    />
                    <input type="text" placeholder="Kategori" className="w-full border p-2 mb-2"
                      value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} 
                    />
                    <input type="text" placeholder="URL Gambar" className="w-full border p-2 mb-2"
                      value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} 
                    />
                    <div className="flex justify-between">
                      <button onClick={addProduct} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        Simpan
                      </button>
                      <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Daftar Produk */}
              <div className='grid grid-cols-3 gap-4 mt-4'>
                {products.map((product) => (
                  <div key={product.id} className='bg-white p-4 shadow-lg rounded-lg'>
                    <img src={product.image} alt={product.name} className='w-full h-40 object-cover mb-2' />
                    <h3 className='text-lg font-bold'>{product.name}</h3>
                    <p className='text-gray-700'>Rp {product.price}</p>
                    <p className='text-sm text-gray-500'>{product.category}</p>
                    <button onClick={() => deleteProduct(product.id)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded flex items-center hover:bg-red-700">
                      <Trash2 className="mr-2" /> Hapus
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
