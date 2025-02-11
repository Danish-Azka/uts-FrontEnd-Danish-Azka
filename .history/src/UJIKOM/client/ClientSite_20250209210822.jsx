import React from 'react'
import NavCLient from './compClient/NavCLient'
import Banner from './compClient/Banner'

const ClientSite = () => {
  return (
    <>
    <div className='w-full bg-white '>
      <div className='w-11/12 flex items-center justify-center flex-col'>
        <div className='fixed z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='w-ful' >
            <Banner/>
        </div> 

      </div>
    </div>
    </>
  )
}

export default ClientSite