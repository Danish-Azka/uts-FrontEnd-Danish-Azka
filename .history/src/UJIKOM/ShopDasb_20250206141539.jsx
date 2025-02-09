import React from 'react';
import { IoCart, IoCube } from "react-icons/io5";
import Secondside from './SecondSide';
import { Navbar } from '../component/Navbar';
import Keuntungan from './chart/Keuntungan';

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
          <div className='bg-[#E9EAEC] h-full w-11/12  p-3'>
          
            <div className='flex grid-cols-3 gap-10'>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                <p className="text-xl font-semibold">Konstruksi Teknik Sipil</p>
                <p className="text-gray-500 mt-3">Pembangunan gedung, infrastruktur transportasi, sistem drainase, dan renovasi.</p>
                </div>
             </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                <p className="text-xl font-semibold">Konstruksi Teknik Sipil</p>
                <p className="text-gray-500 mt-3">Pembangunan gedung, infrastruktur transportasi, sistem drainase, dan renovasi.</p>
                </div>
             </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center">
                <p className="text-xl font-semibold">Konstruksi Teknik Sipil</p>
                <p className="text-gray-500 mt-3">Pembangunan gedung, infrastruktur transportasi, sistem drainase, dan renovasi.</p>
                </div>
             </div>
           </div>

            <div className='flex  gap-10 mt-10'>
            <div className="bg-white w-2/3 rounded-lg shadow-md p-6">
                <Keuntungan/>
             </div>
            <div></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDasb;
