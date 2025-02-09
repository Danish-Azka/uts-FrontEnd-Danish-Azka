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

      <div className='px-5 py-5 h-full flex flex-col justify-between w-[84%]'>

      </div>

      
    </div>   
  )
}

export default Product