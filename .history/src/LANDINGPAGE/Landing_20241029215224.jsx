import React from 'react'
import Navbar2 from '../component/Navbar2'

const Landing = () => {
  return (
    <div className=' w-full h-full '>
        <div className='h-[100-px] border-b border-slate-400 px-1 py-1 flex'>
            <div className='w-5 h-5 bg-red-400 mr-2 rounded-full'></div>
            <div className='w-5 h-5 bg-yellow-400 mr-2 rounded-full'></div>
            <div className='w-5 h-5 bg-green-400 rounded-full'></div>
        </div>
        <div>
            <Navbar2/>
        </div>
        <div className='flex justi'></div>
    </div>
  )
}

export default Landing