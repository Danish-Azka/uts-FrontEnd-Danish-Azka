import React from 'react';
import { IoCarSport, IoFolderOpen, IoHome, IoPeople, IoPerson, IoReturnDownBack } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import AdminProf from './AdminProf';
import aa from './aa.png';

// Komponen SidebarItem yang dapat digunakan kembali
const SidebarItem = ({ path, icon: Icon, label }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <div
      className={`w-full h-[25%] rounded-s-xl sideButt ${isActive ? 'bg-white' : ''}`}
      onClick={() => navigate(path)}
    >
      <div className='flex items-center w-full h-full gap-3 ps-7 text-[#1e617b] font-semibold teksSide'>
        <Icon /> {label}
      </div>
    </div>
  );
};

const Side = () => {
  return (
    <div className='h-full w-full'>
      {/* Header */}
      <div className='w-full h-[30%] bg-[#FBB900] py-4 px-4'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className='text-sm text-white ms-2'>Active</p>
          </div>
          <AdminProf />
        </div>
        <div className='flex flex-col items-center mt-4'>
          <img className='w-[120px] rounded-full' src={aa} alt="Profile" />
          <p className='text-white text-sm text-center mt-3'>RentCarkuu</p>
          <p className='text-gray-500 text-sm text-center mt-1'>www.RentCarku.com</p>
        </div>
      </div>
      
      {/* Sidebar Menu */}
      <div className='w-full bg-[rgb(36,42,66)] py-7'>
        <div className='w-full h-full ps-3 cursor-default'>
          <SidebarItem path="/display" icon={IoHome} label="Home" />
          <SidebarItem path="/karyawan" icon={IoPerson} label="Partnership" />
          <SidebarItem path="/client" icon={IoPeople} label="Client" />
          <SidebarItem path="/mobil" icon={IoCarSport} label="Car" />
          <SidebarItem path="/transaksi" icon={IoFolderOpen} label="Transaction" />
          <SidebarItem path="/pengembalian" icon={IoReturnDownBack} label="Return" />
        </div>
      </div>
    </div>
  );
};

export default Side;
