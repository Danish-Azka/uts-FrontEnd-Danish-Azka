import React, { useEffect, useState } from 'react';
import { XCircle, Trash2Icon } from "lucide-react";
import { getCartByBuyerId, deleteCart, editCart } from '../../../service/apiCart';

const Cart = ({ isCartOpen, onClose }) => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (isCartOpen) fetchCart();
  }, [isCartOpen]);

  const fetchCart = async () => {
    try {
      const carts = await getCartByBuyerId();
      setData(carts);
    } catch (error) {
      console.error('Error fetching cart', error);
    }
  };

  const handleDelete = async (cartId) => {
    try {
      await deleteCart(cartId);
      setData(data.filter(item => item.id !== cartId));
    } catch (error) {
      console.error('Gagal menghapus item', error);
    }
  };

  const handleUpdateQuantity = async (cartId, newQuantity, hargaPerItem) => {
    if (newQuantity < 1) return;
    try {
      const updatedTotalHarga = newQuantity * hargaPerItem;
      await editCart(cartId, { jumlah: newQuantity, Totalharga: updatedTotalHarga });
      setData(data.map(item => 
        item.id === cartId ? { ...item, jumlah: newQuantity, Totalharga: updatedTotalHarga } : item
      ));
    } catch (error) {
      console.error('Gagal memperbarui jumlah', error);
    }
  };

  const handleSelectItem = (cartId) => {
    setSelectedItems((prev) =>
      prev.includes(cartId) ? prev.filter(id => id !== cartId) : [...prev, cartId]
    );
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-300 rounded-lg h-[700px] w-[900px] shadow-lg">
        <div className="flex justify-between h-[60px] p-5 bg-black rounded-t-lg items-center border-b pb-2">
          <h2 className="text-xl font-bold text-white">Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500 cursor-pointer" />
          </button>
        </div>

        <div className='w-full max-h-full p-3 flex gap-3 justify-between items-center h-[640px]'>
          <div className="flex flex-col items-center h-[640px] w-7/12 gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-lg">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className='h-[250px] bg-white w-full flex flex-col p-3 rounded-lg shadow-md'>
                  <div className='flex justify-between w-full items-center mb-3'>
                    <div className='flex gap-3 items-center'>
                      <input type="checkbox" onChange={() => handleSelectItem(item.id)} checked={selectedItems.includes(item.id)} />
                      <img className='w-10 h-10 rounded-full border border-black' src={item.Shop?.gambar} alt="Shop" />
                      <p>{item.Shop?.nama}</p>
                    </div>
                    <button onClick={() => handleDelete(item.id)}>
                      <Trash2Icon className="text-red-500 cursor-pointer" />
                    </button>
                  </div>

                  <div className='flex gap-3'>
                    <div className='w-1/3'>
                      <img className="w-full h-32 object-cover rounded-lg" src={item.Product?.gambar} alt="Product" />
                    </div>
                    <div className='w-2/3 flex flex-col justify-start gap-2'>
                      <p className='text-xl font-semibold'>{item.Product?.nama}</p>
                      <p className='text-xs font-light bg-slate-400 px-2 py-1 rounded-xl w-fit'>{item.Product?.category}</p>
                      <p>Harga Per Item: IDR {item.Product?.harga.toLocaleString()}</p>
                      <p>Total Harga: IDR {item.Totalharga.toLocaleString()}</p>
                      <div className='flex items-center gap-3'>
                        <button className='bg-slate-300 text-black border px-2 rounded' 
                          onClick={() => handleUpdateQuantity(item.id, item.jumlah - 1, item.Product?.harga)}>-</button>
                        <p className="font-semibold">{item.jumlah}</p>
                        <button className='bg-slate-300 text-black border px-2 rounded' 
                          onClick={() => handleUpdateQuantity(item.id, item.jumlah + 1, item.Product?.harga)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Keranjang kosong</p>
            )}
          </div>

          <div className='bg-white h-[300px] items-start p-3 rounded-xl w-5/12'>
            <div className=''>
              <p className='text-xl font-semibold border border-b-black'> CheckOut :</p>
            </div>
            <div className='mt-3'>
              <div></div>
              <p className='text-l'>Product :</p>
              <p className='text-l'>Shipping Costs :</p>
              <p className='text-l'>Total :</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;