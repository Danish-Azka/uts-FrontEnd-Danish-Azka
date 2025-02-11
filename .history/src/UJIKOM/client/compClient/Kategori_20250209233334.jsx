import React from 'react'

const Kategori = () => {
  return (
    <>
    <div className= 'mt-10 h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full justify-center items-center'>
          <div className='w-8/12 h-full rounded-lg'>
          <p className='text-3xl font-bold text-center mb-5'>K A T E G O R I</p>
            <div className="grid grid-cols-4 gap-4 w-full h-full">
                <div className="bg-red-500 rounded-xl h-1/4 flex justify-center items-center gap-5">01</div>
                <div className="bg-red-500 rounded-xl h-1/4 flex justify-center items-center gap-5">02</div>
                <div className="bg-red-500 rounded-xl h-1/4 flex justify-center items-center gap-5">03</div>
                <div className="bg-red-500 rounded-xl h-1/4 flex justify-center items-center gap-5">03</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Kategori