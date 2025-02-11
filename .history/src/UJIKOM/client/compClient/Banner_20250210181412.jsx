import React from 'react'
import bg from './bengkel.jpeg'
const Banner = () => {
  return (
    <>
    <div className= 'bg-white h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full gap-3 '>
          <div className='w-8/12 bg-yellow-500 rounded-lg'>
            <img clsrc={bg} alt="" />
          </div>
          <div className='w-4/12 flex flex-col gap-3'>
            <div className='w-full h-1/2 bg-blue-500 rounded-lg'>f</div>
            <div className='w-full h-1/2 bg-blue-500 rounded-lg'>f</div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Banner