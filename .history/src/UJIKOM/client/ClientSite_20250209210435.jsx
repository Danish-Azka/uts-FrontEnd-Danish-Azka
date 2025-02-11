import React from 'react'
import NavCLient from './compClient/NavCLient'
import Banner from './compClient/Banner'

const ClientSite = () => {
  return (
    <>
    <div className='w-full bg-white'>
      <div>
        <div className='fixed z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div >
            <Banner/>
        </div> 
      </div>
    </div>
    </>
  )
}

export default ClientSite