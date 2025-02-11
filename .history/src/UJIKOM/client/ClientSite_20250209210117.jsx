import React from 'react'
import NavCLient from './compClient/NavCLient'
import Banner from 

const ClientSite = () => {
  return (
    <>
    <div>
        <div className='fixed z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div >
            <Banner/>
        </div>
    </div>
    </>
  )
}

export default ClientSite