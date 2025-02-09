import React, { useEffect, useState } from 'react'
import Navbar2 from '../component/Navbar2'
import { getMobil } from '../service/apiMobil'

const Landing = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetchMobil()
    },[])

const fetchMobil = () => {
    getMobil()
      .then(res => {
        setdata(res)
        console.log(res)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
    return (
    <div className=' w-full h-full pb-10'>
        <div className='h-[100-px] border-b border-slate-400 px-1 py-1 flex'>
            <div className='w-5 h-5 bg-red-400 mr-2 rounded-full'></div>
            <div className='w-5 h-5 bg-yellow-400 mr-2 rounded-full'></div>
            <div className='w-5 h-5 bg-green-400 rounded-full'></div>
        </div>
        <div className='pb-[30px] bg-yellow-500'>
            <Navbar2/>
        </div>
        <div className='flex justify-center w-full bg-red-500'>
            <div className='w-full h-[200px] flex justify-center align-middle'><p className='text-[50px] my-auto font-extrabold tracking-widest'>Our <br />  Products</p></div>
            <div className='w-full flex justify-center'><p className='text-sm font-semibold my-auto'>✨ Nikmati Perjalanan Nyaman dengan rentCarKuu! ✨<br />
            Mulai dari petualangan singkat hingga perjalanan panjang, kami punya mobil yang siap menemani Anda. Fleksibel, aman, dan terpercaya, semua kebutuhan transportasi Anda ada di sini! Sewa sekarang dan dapatkan pengalaman berkendara tanpa ribet di rentCarKuu! 🚗💨</p></div>
        </div>
        <div className='flex justify-center w-full pt-[20px]'><p className='text-xl my-auto font-extrabold tracking-wide'>Our Available Products</p></div>
        {/* CODECARD */}
        <div className='max-w-[600px] h-96 bg-gray-500 overflow-x-auto flex items-center'>
        {data && data.map((item, index) => (
            <div key={index} class=" max-w-sm h-[350px] bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="p-8 rounded-t-lg w-full h-full" src={item.gambar} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.merk} - {item.model}</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        {/* BINTANG */}
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">{item.harga}</span>
                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Landing