import React from 'react';
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';

const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];

const ShopDasb = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Secondsideide menuItems={shopMenu} />
      </div>
      
      <div className='px-5 py-5 h-full flex flex-col justify-between w-[84%] bg-slate-400'>
        konten yg lain
      </div>
    </div>
  );
};

export default ShopDasb;
