import React from 'react'
import NavCLient from './NavCLient'

export const KategoriTemplate = () => {
  return (
<div className='w-full h-full bg-[#f5f5f5]'>
    <div>
        <div className='sticky z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='flex justify-center items-center h-'>
            <div className='w-10/12 h-full gap-3 flex justify-center items-center'>
                <div className='w-8/12 bg-yellow-500 rounded-lg'>d</div>
            </div>
        </div>
    </div>
</div>
      )
}

