import React, { useEffect, useState } from 'react';
import { XCircle, Trash2Icon } from "lucide-react";
import { getCartByBuyerId, deleteCart, editCart } from '../../../service/apiCart';

const Cart = ({ isCartOpen, onClose }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isCartOpen) {
      fetchCart();
    }
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

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-300 rounded-lg h-[700px] w-[700px] shadow-lg">
        <div className="flex justify-between h-[] p-5 bg-black rounded-t-lg items-center border-b pb-2 mb-3">
          <h2 className="text-xl font-bold text-white">Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500 cursor-pointer" />
          </button>
        </div>

        <div className="flex flex-col gap-3 h-5/6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-thumb-rounded-lg">
         
        </div>
      </div>
    </div>  
  );
};

export default Cart;
