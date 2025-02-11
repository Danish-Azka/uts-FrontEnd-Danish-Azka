import React, { useState, use } from 'react'
import NavCLient from './NavCLient'
import { getProduct } from '../../../service/apiProduct'


export const KategoriTemplate = () => {
    const [data, setData] = useState([])
    
     useEffect(() => {
        fetchProduct();
      }, []);
    
      const fetchProduct = async () => {
        try {
          const mobil = await getProduct();
          setData(mobil);
          console.log(mobil)
        } catch (error) {
          console.error('Error fetching mobil', error);
        }
      };
  return (
<div className='w-full h-full bg-[#f5f5f5]'>
    <div>
        <div className='sticky z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='w-full p-5 h-[350px] gap-3 flex justify-center items-center'>
            <div className='w-8/12 h-full bg-yellow-500 rounded-lg'>
              <div className='h-1/6 w-full bg-red-500 flex justify-between items-center px-3'>
              <p className='font-bold text-xl'>G E A R U P</p>
              </div>
            </div>
        </div>
    </div>
</div>
      )
}

