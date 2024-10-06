import React, { useEffect, useState } from 'react';
import { IoCar, IoCarSport, IoEyeOffSharp,IoEyeSharp, IoLogoInstagram } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom'; // Tambahkan useNavigate
import axios from 'axios';

const Login = () => {
  const [alertShow, setAlertShow] = useState(false);
  const [salah, setsalah] = useState('');
  const [warn, setwarn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleshow = () => {
    setShowPassword(prevState => !prevState)
  }
  const navigate = useNavigate();

  
  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3009/admin/get'); 
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };

  const handleClick = async () => {
    const input = document.querySelector('.input');
    const input2 = document.querySelector('.inputT');

    try {
      const response = await getUsers();
      const users = response.users || response; 

      let user = users.find(user => input.value === user.email && input2.value === user.password);

      if (user) {
        navigate('/pts-rentCarKuu/display'); 
        localStorage.setItem('nama', user.nama);
        localStorage.setItem('email', user.email);
        localStorage.setItem('pp', user.photo);
      } else {
        setAlertShow(true);
        setsalah('border-red-500');
        setwarn(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (alertShow) {
      const timer = setTimeout(() => {
        setAlertShow(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alertShow]);

  return (
    <>
      {alertShow && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-500 text-white font-bold py-2 px-4 rounded w-80">
            Data yang dimasukkan tidak valid
          </div>
        </div>
      )}
      <div id="bg" className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h1 className="text-center text-2xl font-bold">Welcome</h1>
            <h6 className="text-center text-sm mt-2">
              <span className="px-2 py-1 bg-gray-200 rounded">To RentCarkuuu</span>
            </h6>
            <div className="mt-6">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none input focus:ring-2 ${salah}`}
                  placeholder="Enter Your Email Address..."
                />
                <div className="relative w-full ">
            <input
                type={showPassword ? "text" : "password"} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter Your Password..."
            />
            <button
                type="button"
                onClick={handleshow}
                className="absolute right-3 top-1/2 bg-red-500 transform -translate-y-1/2 text-gray-500" 
            >
                {showPassword ? <IoEyeOffSharp size={24} /> : <IoEyeSharp size={24} />}
            </button>
        </div>
                {warn && <p className="text-red-500">Data yang dimasukkan salah</p>}
                <button
                  onClick={handleClick}
                  className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
                <p className="text-center pt-4 w-100 text-blue-500 hover:underline">
                  <Link to="/sign">Don't Have a Account <span className="fw-bolder text-primary">Sign Up</span></Link>
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                  <a href="https://www.instagram.com/azkrmt_" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram className="text-gray-800" />
                  </a>
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <IoCarSport />
                </div>
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <IoCar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
