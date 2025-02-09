import React, { useEffect, useState } from 'react';
import { createTransaksi } from '../service/apiTransaksi';
import moment from 'moment/moment';
import { getMobilById } from '../service/apiMobil'; 
import { getClients } from '../service/apiClient';

const ModalFormTransaksi = ({ onClose }) => {
  const [data, setdata] = useState([]);
    
  useEffect(() => {
      fetchMobil();
  },[]);

  const fetchMobil = () => {
      getClients()
          .then(res => {
              setdata(res);
              console.log(res);
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }
  const [formData, setFormData] = useState({
    tanggalPeminjaman: '',
    batasPeminjaman: '',
    durasiSewa: '',
    totalBiaya: '',
    ClientId: '',
    MobilId: '',
    KaryawanId: ''
  });

  const [mobilPrice, setMobilPrice] = useState(0);
  const [selisih, setSelisih] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tanggalPinjam = moment(formData.tanggalPeminjaman);
    const tanggalKembali = moment(formData.batasPeminjaman);
    const diffDays = tanggalKembali.diff(tanggalPinjam, 'days');
    const validSelisih = isNaN(diffDays) || diffDays < 0 ? 0 : diffDays;
    setSelisih(validSelisih);

    setFormData((prevData) => ({
      ...prevData,
      durasiSewa: validSelisih
    }));
  }, [formData.tanggalPeminjaman, formData.batasPeminjaman]);

  useEffect(() => {
    const fetchMobilPrice = async () => {
      if (formData.MobilId) {
        try {
          const response = await getMobilById(formData.MobilId); 
          setMobilPrice(response.harga); 
        } catch (err) {
          console.error('Error mengambil harga mobil:', err);
          setMobilPrice(0);
        }
      } else {
        setMobilPrice(0); 
      }
    };

    fetchMobilPrice();
  }, [formData.MobilId]);
  console.log(formData)
  // total biaya
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      totalBiaya: selisih * mobilPrice
    }));
  }, [selisih, mobilPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createTransaksi(formData);  
      console.log('Formulir dikirim:', formData);
      onClose(); 
    } catch (err) {
      setError('Gagal mengirim formulir');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-[400px]  p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Transaksi</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className='grid grid-'></div>
      </div>
    </div>
  );
};

export default ModalFormTransaksi;
