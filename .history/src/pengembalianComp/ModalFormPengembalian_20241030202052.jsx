// src/components/ClientForm.js
import React, { useEffect, useState } from 'react';
import { createPengembalian } from '../service/apiPengembalian';
import { getTransaksiById } from '../service/apiTransaksi';
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
useEffect(() => {
    fetchKaryawan();
},[]);

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

useEffect(() => {
    fetchMobil();
},[]);

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

useEffect(() => {
    fetchTransaksi();
},[]);

const fetchTransaksi = () => {
    getMobil()
        .then(res => {
            setMobil(res);
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

  useEffect(() => {
    const FetchTransaksiDate = async () => {
      if(formData.TransaksiId) {
        try {
          const response = await getTransaksiById(formData.TransaksiId);
          setTransaksiDate(response.batasPeminjaman);
        } catch (err) {
          console.error('Error mengambil Tgl transaksi:', err);
          setTransaksiDate(0);
        }
      } else {
        setTransaksiDate(0)
      }
    };

    FetchTransaksiDate();
  }, [formData.TransaksiId])


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
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Pengembalian</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">TransaksiId:</label>
            <input
              type="text"
              name="TransaksiId"
              value={formData.TransaksiId}
              onChange={(e) => handleChange(e)}
              className="border border-gray-300 p-2 w-full"
              required
            />
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">TransaksiId:</label>
            <select
              type="option"
              onChange={(e) => handleChange(e)}
              name="Id"
              className="border border-gray-300 p-2 w-full"
              required
            >
              <option  selected>Chose TransaksiId</option>
              {client.map((item, index) => (
                <option key={index} value={item.ClientId}>{item.id} - {item.nama}</option>
              ))}
            </select>
          </div>       
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
