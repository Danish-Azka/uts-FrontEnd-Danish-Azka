import React, { useState, useEffect } from 'react';
import { getClientById, editClient } from '../service/apiClient';

const FormEdit = ({ clientId, onClose }) => {
  const [formData, setFormData] = useState({
    nama: '',
    noTelp: '',
    noKtp: ''
  });

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const client = await getClientById(clientId);
        setFormData({
          nama: client.nama,
          noTelp: client.noTelp,
          noKtp: client.noKtp
        });
      } catch (error) {
        console.error('Failed to fetch client data', error);
      }
    };
    fetchClientData();
  }, [clientId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editClient(clientId, formData);
      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error('Failed to update client', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-blue-600">Edit Client</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nomor Telepon</label>
            <input
              type="text"
              name="noTelp"
              value={formData.noTelp}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nomor KTP</label>
            <input
              type="text"
              name="noKtp"
              value={formData.noKtp}
              onChange={handleChange}
              className="border w-full p-2 mt-1"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
