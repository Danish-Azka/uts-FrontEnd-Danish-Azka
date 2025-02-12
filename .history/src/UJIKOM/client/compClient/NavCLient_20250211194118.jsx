import React from 'react'
import gu from '../../gu.jpeg'
import { ShoppingCart } from "lucide-react";
import Cart from './Cart';
const pp = localStorage.getItem('gambarBuyer')

const NavCLient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  return (
    <>
    <div className='w-full h-20 flex justify-center bg-[#1D1E20] '>
        <div className='w-1/6 flex justify-center items-center gap-2'>
        <img className='w-[55px] rounded-full bg-slate-500' src={gu} alt="Profile" />
        <p className='font-semibold text-white tracking-wider'>GEARUP</p>
        </div>
        <div className='w-4/6 p-2 flex justify-center items-center'>
          <input className='w-11/12 h-3/4 bg-white rounded-xl text-center shadow-md'></input>
        </div>
        <div className='w-1/6 flex justify-center gap-5 items-center'>
        <div className='w-12 h-12 rounded-full p-1 flex justify-center items-center hover:bg-gray-400 '>
          <img className='w-10/12 h-5/6 rounded-full border' src={pp} alt="" />
        </div>
        <ShoppingCart size={24} color="#ffffff" />      
        </div>

        <Cart isOpen={isModalOpen} o/>
    </div>
    </>
  )
}

export default NavCLient