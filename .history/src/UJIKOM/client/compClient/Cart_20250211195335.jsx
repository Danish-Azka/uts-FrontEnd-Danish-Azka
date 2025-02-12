import React, { useEffect } from 'react'
import { XCircle } from "lucide-react";
import { getCart } from '../../../service/apiCart';

const Cart = ({isOpen, onClose}) => {

  if (!isOpen) return null;

  useEffect(() => {
    fetchCart()
  },[])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-[700px] shadow-lg">
      <div className="flex justify-between items-center border-b pb-2 mb-3">
          <h2 className="text-xl font-bold">Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>  
  )
}

export default Cart