import React from 'react'
import NavCLient from './compClient/NavCLient'
import Banner from './compClient/Banner'
import Kategori from './compClient/ALLKATE/Kategori'

const ClientSite = () => {
  return (
    <>
    <div className='w-full h-full bg-[#f5f5f5]'>
      <div>
        <div className='sticky z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='' >
            <Banner/>
            <Kategori/>
        </div> 
    </div>
    </div>
    </>
  )
}

export default ClientSite