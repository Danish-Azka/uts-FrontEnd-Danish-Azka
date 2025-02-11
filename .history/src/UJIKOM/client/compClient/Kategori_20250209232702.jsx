import React from 'react'

const Kategori = () => {
  return (
    <>
    <div className= 'mt-10 h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full gap-3 flex justify-center items-center'>
          <div className='w-8/12 bg-yellow-500 rounded-lg'>
            <div className="grid grid-cols-2 gap-4 w-full h-full">
                <div className="bg-red-500 rounded-xl h-full">01</div>
                <div className="bg-red-500 rounded-xl h-full">02</div>
                <div className="bg-red-500 rounded-xl h-full">03</div>
                <div className="bg-red-500 rounded-xl h-full">03</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Kategori