import React from 'react'
import NavCLient from './compClient/NavCLient'
import Banner from './compClient/Banner'

const ClientSite = () => {
  return (
    <>
    <div className='w-full h-screen bg-slate-400'>
      <div>
        <div className='sticky z-50 top-0 left-0 right-0'>
          <NavCLient/>
        </div>

        <div className='' >
            <Banner/>
            <Katego
        </div> 
    </div>
    </div>
    </>
  )
}

export default ClientSite