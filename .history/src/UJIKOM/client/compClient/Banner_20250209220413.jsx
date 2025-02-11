import React from 'react'

const Banner = () => {
  return (
    <>
    <div className= 'bg-white h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full gap-3  bg-red-500'>
          <div className='w-8/12 bg-yellow-500'></div>
          <div className='w-4/12 bg-blue-500 flex flex-row gap'></div>
        </div>
    </div>
    </>
  )
}

export default Banner