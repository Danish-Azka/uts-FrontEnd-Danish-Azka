import React from 'react'
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';
import { Navbar } from '../component/Navbar';

const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];


const Product = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
          <Secondside menuItems={shopMenu} />
      </div>

      <div className='w-[84%] h-screen'>
        <Navbar/>
          <div className='flex flex-col items-center justify-center py-3'>
            <div className='bg-[#E9EAEC] h-full w-11/12  p-1'>
            </div>
          </div>
      </div>  


    </div>   
  )
}

export default Product