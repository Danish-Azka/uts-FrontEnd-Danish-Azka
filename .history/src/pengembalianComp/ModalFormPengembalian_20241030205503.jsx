// src/components/ClientForm.js
import React, { useEffect, useState } from 'react';
import { createPengembalian } from '../service/apiPengembalian';
import { getTransaksi, getTransaksiById } from '../service/apiTransaksi';
import { getMobil } from '../service/apiMobil';
import { getClients } from '../service/apiClient';
import { getKaryawan } from '../service/apiKaryawan';


const ModalFormPengembalian = ({ onClose }) => {

const [client, setClient] = useState([]);
const [karyawan, setKaryawan] = useState([]);
const [mobil, setMobil] = useState([]);
const [transaksi, setTransaksi] =useState([])
  
useEffect(() => {
    fetchClient();
    fetchKaryawan();
    fetchMobil();
    fetchTransaksi();
},[]);

const fetchClient = () => {
    getClients()
        .then(res => {
            setClient(res);
            console.log(res);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const fetchKaryawan = () => {
    getKaryawan()
        .then(res => {
            setKaryawan(res);
            console.log(res);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const fetchMobil = () => {
    getMobil()
        .then(res => {
            setMobil(res);
            console.log(res);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


const fetchTransaksi = () => {
    getTransaksi()
        .then(res => {
            setTransaksi(res);
            console.log(res);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

  const [formData, setFormData] = useState({
    tanggalPengembalian: '',
    batasPeminjaman: '',
    TransaksiId: '',
    ClientId: '',
    MobilId: '',
    KaryawanId: ''
  });
 
  const [transaksiDate, setTransaksiDate] = useState(0)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (name === "TransaksiId" && value) {
    try{
      const prevTransaksi = getTransaksiById(value);
      setFormData({
        ...formData,
        TransaksiId: value,
        ClientId: selectedTransaksi.ClientId,
        MobilId: selectedTransaksi.MobilId,
        KaryawanId: selectedTransaksi.KaryawanId,
        batasPeminjaman: selectedTransaksi.batasPeminjaman,
        tanggalPengembalian: '' 
      })
    } catch
  }
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      batasPeminjaman: transaksiDate
    }));
  }, [transaksiDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await createPengembalian(formData);  
      console.log('Form submitted:', formData);
      onClose(); 
    } catch (err) {
      setError('Failed to submit form');
    } finally {
      setLoading(false);
    }
  };
  console.log(transaksi)
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Pengembalian</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">TransaksiId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="TransaksiId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose TransaksiId</option>
              {transaksi.map((item, index) => (
                <option key={index} value={item.TransaksiId}>{item.id} </option>
              ))}
            </select>
          </div>       
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Batas Peminjaman:</label>
            <input
              type="date"
              name="batasPeminjaman"
              value={formData.batasPeminjaman}
              readOnly
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Tanggal Pengembalian:</label>
            <input
              type="date"
              name="tanggalPengembalian"
              value={formData.tanggalPengembalian}
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
           <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">ClientId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="ClientId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose ClientId</option>
              {client.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.nama}</option>
              ))}
            </select>
          </div>        
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">KaryawanId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="ClientId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose Empeloyee</option>
              {karyawan.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.nama}</option>
              ))}
            </select>
          </div>      
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">MobilId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="MobilId"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose Car</option>
              {mobil.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.model}</option>
              ))}
            </select>
          </div>      
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalFormPengembalian;
