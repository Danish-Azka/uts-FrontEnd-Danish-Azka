import React from 'react'
import gu from '../gu.jpeg'
import { ShoppingCart } from "lucide-react";

const NavCLient = () => {
  return (
    <>
    <div className='w-full h-20 flex justify-center bg-[#1D1E20] '>
        <div className='w-1/6 flex justify-center items-center'>
        <img className='w-[55px] rounded-full bg-slate-500' src={gu} alt="Profile" />
        <p className='font-semibold '>GEARUP</p>
        </div>
        <div className='w-4/6 p-2 flex justify-center items-center'>
          <input className='w-11/12 h-3/4 bg-white rounded-xl text-center shadow-md'></input>
        </div>
        <div className='w-1/6 flex justify-center items-center'>
        <ShoppingCart color="#ffffff" />      
        </div>
    </div>
    </>
  )
}

export default NavCLient