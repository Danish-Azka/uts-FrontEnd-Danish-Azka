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
            <div className='bg-[#E9EAEC] h-full w-11/12  '>
              {/* header */}
              <div className='w-full h-14 flex justify-center items-center bg-[#1D1E20]'> 
                <p className='text-center text-3xl font-semibold text-[#E9EAEC]'>Product's</p>
              </div>
              {/* body */}
              <div className='w-full h-[625px]'>
                <div className='w-full h-1/2 flex justify-center'>
                  <div className='w-3/4  bg-red-500'>v</div>
                  <div className='w-1/4 bg-blue-500'>c</div>
                </div>
                <div className='w-full fle'></div>
              </div>
            </div>
          </div>
      </div>  


    </div>   
  )
}

export default Product