import React, { useEffect, useState } from 'react';
import Navbar2 from '../component/Navbar2';
import { getMobil } from '../service/apiMobil';

const Landing = () => {
    const [data, setdata] = useState([]);
    
    useEffect(() => {
        fetchMobil();
    },[]);

    const fetchMobil = () => {
        getMobil()
            .then(res => {
                setdata(res);
                console.log(res);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='w-full h-full pb-10'>
            <div className='h-[100-px] border-b border-slate-400 px-1 py-1 flex'>
                <div className='w-5 h-5 bg-red-400 mr-2 rounded-full'></div>
                <div className='w-5 h-5 bg-yellow-400 mr-2 rounded-full'></div>
                <div className='w-5 h-5 bg-green-400 rounded-full'></div>
            </div>
            <div className='pb-[30px] bg-yellow-500'>
                <Navbar2/>
            </div>
            <div className='flex justify-center w-full bg-red-500'>
                <div className='w-full h-[200px] flex justify-center items-center'>
                    <p className='text-[50px] font-extrabold tracking-widest'>Our <br /> Products</p>
                </div>
                <div className='w-full flex justify-center'>
                    <p className='text-sm font-semibold'>
                        ✨ Nikmati Perjalanan Nyaman dengan rentCarKuu! ✨<br />
                        Mulai dari petualangan singkat hingga perjalanan panjang, kami punya mobil yang siap menemani Anda. Fleksibel, aman, dan terpercaya, semua kebutuhan transportasi Anda ada di sini! Sewa sekarang dan dapatkan pengalaman berkendara tanpa ribet di rentCarKuu! 🚗💨
                    </p>
                </div>
            </div>
            <div className='flex justify-center w-full pt-[20px]'>
                <p className='text-xl font-extrabold tracking-wide'>Our Available Products</p>
            </div>

           <div className='w-11/12 flex justify-center bg-red-500'>
           </div>
        </div>
    );
}

export default Landing;
