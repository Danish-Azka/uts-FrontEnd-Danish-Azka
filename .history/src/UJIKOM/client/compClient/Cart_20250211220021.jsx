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
      <div className="bg-slate-300 rounded-lg h-[600px] w-[700px] shadow-lg">
        <div className="flex justify-between p-5 bg-black rounded-t-lg items-center border-b pb-2 mb-3">
          <h2 className="text-xl font-bold text-white">Keranjang</h2>
          <button onClick={onClose}>
            <XCircle size={24} className="text-red-500" />
          </button>
        </div>

        <div className='flex flex-col gap-3 p-5'>
          {(
            data.map((item, index) => (
              <div key={index} className='h-[250px] bg-white w-full flex flex-col'>
                <div className='flex justify-start h-15 gap-5 items-center p-3'>
                  <img className='w-10 h-10 rounded-full border border-black' src={item.Shop?.gambar} alt="" />
                  <p>{item.Shop?.nama}</p>
                </div>

                <div className='flex flex-row gap-2 p-3'>
                  <div className='w-1/3 ]'><img  className="w-full h-2/3"src={item.Product?.gambar} alt="" /></div>
                  <div className='w-2/3 h-full'>
                    
                  </div>
                </div>
              </div>        
            ))
          )}
        </div>
      </div>
    </div>  
  )
}

export default Cart