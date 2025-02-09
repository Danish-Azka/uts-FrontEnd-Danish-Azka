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
    fetchTransaksi()
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
    denda: '',
    TransaksiId: '',
    ClientId: '',
    MobilId: '',
    KaryawanId: ''
  });
 
  const [denda, setDenda] = useState(0);
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

  useEffect(() => {
        if (formData.tanggalPengembalian && formData.batasPeminjaman) {
            const batasPinjam = new Date(formData.batasPeminjaman);
            const tglKembali = new Date(formData.tanggalPengembalian);

            if (tglKembali > batasPinjam) {
                const diffInMs = tglKembali - batasPinjam;
                const keterlambatan = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
                const totalDenda = keterlambatan * 50000;

                setFormData((prevData) => ({
                    ...prevData,
                    denda: totalDenda
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    denda: 0
                }));
            }
        }
}, [formData.tanggalPengembalian, formData.batasPeminjaman]);

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
              onChange={(e) => handleChange(e)}
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
          {denda > 0 && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Denda:</label>
              <input
                type="text"
                name="denda"
                onChange={(e) => handleChange(e)}
                value={formData.denda}
                readOnly
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          )}
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
              name="KaryawanId"
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
