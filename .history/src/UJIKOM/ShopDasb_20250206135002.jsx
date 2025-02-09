import React from 'react';
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';
import { Navbar } from '../component/Navbar';

const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];

const ShopDasb = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Secondside menuItems={shopMenu} />
      </div>
      
      <div className='w-[84%]'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center pt-5 pb-2'>
          <div className='w-11/12 flex justify-between items-end'></div>
        <
      </div>
    </div>
  );
};

export default ShopDasb;
