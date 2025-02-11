import React from 'react'
import { Link } from 'react-router-dom'

const Kategori = () => {
  return (
    <>
    <div className= 'mt-10 h-[400px] flex justify-center items-center p-3'>
        <div className='flex w-10/12 h-full justify-center items-center'>
          <div className='w-9/12 h-full rounded-lg'>
          <p className='text-3xl font-bold text-center mb-5'>K A T E G O R I</p>
            <div className="grid grid-cols-4 gap-4 w-full h-full">
                <Link to={'/sparepart'}><div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center">Sparepart Kendaraan</div></Link>
                <Link to={'/aksesoris'}><div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center">Aksesoris Kendaraan</div></Link>
                <Link to={'/aksesoris'}></Link><div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center">Perawatan & Perlengkapan</div></Linm
                <div className="bg-white shadow-lg rounded-xl h-1/4 flex flex-col gap-2 justify-center items-center">Peralatan & Modifikasi</div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Kategori