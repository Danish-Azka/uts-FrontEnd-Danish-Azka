import React from 'react'
import NavCLient from './NavCLient'

export const KategoriTemplate = () => {
  return (
<div className='w-full h-full bg-[#f5f5f5]'>
    <div>
        <div className='sticky z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='w-full p-5 h-[350px] gap-3 flex justify-center items-center'>
            <div className='w-8/12 h-full bg-yellow-500 rounded-lg'>
              <div className='h-1/6 w-full bg-red-500 flex justify-between items-center px-3'>
              <p className='fon'>L O G U P G E A R...</p>
              </div>
            </div>
        </div>
    </div>
</div>
      )
}

