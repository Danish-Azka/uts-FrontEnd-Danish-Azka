import React from "react";

const ModalTambah = ({onClose}) => {
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Nama Produk"
            className="w-full border p-2 rounded"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Harga"
            className="w-full border p-2 rounded"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Kategori"
            className="w-full border p-2 rounded"
            value={newProduct.category}
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          />
          <input
            type="text"
            placeholder="URL Gambar"
            className="w-full border p-2 rounded"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
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
      </div>
    </div>
  );
};

export default ModalTambah;
