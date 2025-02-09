import React, { useState } from 'react';
import { IoCart, IoCube } from "react-icons/io5";
// import Secondside from './SecondSide';
// import { Navbar } from '../component/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

  const addProduct = () => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: "", price: "", category: "", image: "" });
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
          <div className='bg-[#E9EAEC] h-full w-11/12'>
            <div className='w-full h-14 flex justify-center items-center bg-[#1D1E20]'>
              <p className='text-center text-3xl font-semibold text-[#E9EAEC]'>Product's</p>
            </div>
            <div className='w-full p-4'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button><PlusCircle className="mr-2" /> Tambah Produk</Button>
                </DialogTrigger>
                <DialogContent>
                  <h2 className="text-lg font-semibold mb-4">Tambah Produk Baru</h2>
                  <Input placeholder="Nama Produk" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                  <Input placeholder="Harga" type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                  <Input placeholder="Kategori" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
                  <Input placeholder="URL Gambar" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                  <Button onClick={addProduct} className="mt-4">Simpan</Button>
                </DialogContent>
              </Dialog>
              <div className='grid grid-cols-3 gap-4 mt-4'>
                {products.map((product) => (
                  <div key={product.id} className='bg-white p-4 shadow-lg rounded-lg'>
                    <img src={product.image} alt={product.name} className='w-full h-40 object-cover mb-2' />
                    <h3 className='text-lg font-bold'>{product.name}</h3>
                    <p className='text-gray-700'>Rp {product.price}</p>
                    <p className='text-sm text-gray-500'>{product.category}</p>
                    <Button variant="destructive" onClick={() => deleteProduct(product.id)} className='mt-2'>
                      <Trash2 className="mr-2" /> Hapus
                    </Button>
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
