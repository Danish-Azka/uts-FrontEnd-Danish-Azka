import React, { useEffect, useState } from 'react'
import { XCircle } from "lucide-react";
import { getCartByBuyerId } from '../../../service/apiCart';

const Cart = ({isOpen, onClose}) => {
  
  const [data, setData] = useState([])

  useEffect(() => {
    fetchCart()
  },[])

  const fetchCart = async () => {
    try{
      const carts = await getCartByBuyerId();
      setData(carts);
    }catch(error){
      console.error('error fetching cart', error)
    }
  }
  if (!isOpen) return null;
  console.log(data)
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[700px] shadow-lg">
        <div className="flex justify-between p-5 bg-black rounded-t-lg items-center border-b pb-2 mb-3">
          <h2 className="text-xl font-bold text-white">Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500" />
          </button>
        </div>

        div
      </div>
    </div>  
  )
}

export default Cart