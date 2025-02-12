import React from 'react';
import { IoCloseSharp, IoLogoInstagram } from "react-icons/io5";

const BuyerProf = ({ isOpen, onClose }) => {
  const nm = localStorage.getItem('namaBuyer');
  const eml = localStorage.getItem('emailBuyer');
  const pp = localStorage.getItem('gambarBuyer');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-100 w-[400px] rounded-lg shadow-lg px-3 flex flex-col justify-center relative">
        <div className="bg-white rounded-lg py-6 flex justify-end shadow-lg">
          <button
            className="bg-gray-500 text-white px-2 py-2 rounded hover:bg-red-600"
            onClick={onClose} 
          >
            <IoCloseSharp />
          </button>
        </div>
        <div>
          <img className='bg-slate-300 rounded-full h-[100px] w-[100px] mx-auto absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2' src={pp} alt="Profile" />
        </div>
        <div className='text-center mt-20'>
          <p className='text-lg font-semibold'>{nm}</p>
          <p className='text-sm'>{eml}</p>
        </div>
        <div className="flex justify-center gap-4 mt-4 pb-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            <a href="https://www.instagram.com/azkrmt_" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="text-gray-800" />
            </a>
          </div>
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">B</div>
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">C</div>
        </div>
      </div>
    </div>
  );
};

export default BuyerProf;
