import React from 'react'

const shopMenu = [
  { path: '/penjualan', icon: <IoCart />, label: 'Penjualan' },
  { path: '/product', icon: <IoCube />, label: 'Produk' }
];


const Product = () => {
  return (
    <>
     <div className='flex justify-center h-screen'>
      <div className='w-[16%] h-full'>
        <Secondside menuItems={shopMenu} />
      </div>
      
      <div className='w-[84%]'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center py-3'>
          <div className='bg-[#E9EAEC] h-full w-11/12  p-1'></div>
        </div
    </>
  )
}

export default Product