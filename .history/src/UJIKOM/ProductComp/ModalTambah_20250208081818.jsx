import React from "react";

const ModalTambah = ({onClose}) => {
    const [formData, setFormData] = useState({
        nama: '',
        harga: '',
        gambar: '',
        deskripsi:''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
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
        await createShop(formData); 
        console.log('Form submitted:', formData);
        onClose(); 
        } catch (err) {
      setError('Failed to submit form');
        } finally {
            setLoading(false);
        }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
        <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <input
            type="text"
            name="nama"
            className="w-full border p-2 rounded"
            value={formData.nama}
            onChange={(e) => handleChange(e)}
       />
          <input
            type="number"
            name="harga"
            className="w-full border p-2 rounded"
            value={formData.harga}
            onChange={(e) => handleChange(e)}
        />
          <input
            type="text"
            name="gambar"
            className="w-full border p-2 rounded"
            value={formData.gambar}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="deskripsi"
            className="w-full border p-2 rounded"
            value={formData.deskripsi}
            onChange={(e) => handleChange(e)}
        />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Batal
          </button>
          <button
            onClick={addProduct}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Simpan
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTambah;
