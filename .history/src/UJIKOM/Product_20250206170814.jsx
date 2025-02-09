import React from 'react'

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
    </div>   
  )
}

export default Product