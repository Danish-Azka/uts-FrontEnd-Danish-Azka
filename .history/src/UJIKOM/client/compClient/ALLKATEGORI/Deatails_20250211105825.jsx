import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";

const Deatisl = () => {
  const { id } = useParams(); // Ambil ID produk dari URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Simulasi Fetch Data Produk
  useEffect(() => {
    // Simulasi data produk (Gantilah dengan API fetch jika perlu)
    const dummyProducts = [
      {
        id: "1",
        nama: "Sepatu Sport",
        gambar: "https://via.placeholder.com/500",
        deskripsi: "Sepatu sport nyaman untuk olahraga.",
        harga: 500000,
        Shop: { nama: "SportStore", gambar: "https://via.placeholder.com/50" },
      },
      {
        id: "2",
        nama: "Tas Backpack",
        gambar: "https://via.placeholder.com/500",
        deskripsi: "Tas backpack untuk traveling.",
        harga: 300000,
        Shop: { nama: "TravelGear", gambar: "https://via.placeholder.com/50" },
      },
    ];

    const foundProduct = dummyProducts.find((item) => item.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/not-found"); // Redirect jika produk tidak ditemukan
    }
  }, [id, navigate]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold mb-3">{product.nama}</h1>
      <img
        src={product.gambar}
        alt={product.nama}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 border border-black rounded-full"
          src={product.Shop.gambar}
          alt=""
        />
        <p className="text-gray-700 text-sm">{product.Shop?.nama}</p>
      </div>
      <p className="text-gray-600 mb-3">Deskripsi Produk: {product.deskripsi}</p>
      <span className="text-lg font-bold text-gray-900">
        IDR {product.harga.toLocaleString()}
      </span>
      <div className="mt-4 flex justify-between">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 flex items-center gap-1 rounded-lg hover:bg-gray-300">
          Add to Favorite <FaHeart size={20} color="red" />
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 flex items-center gap-1 rounded-lg hover:bg-blue-700">
          Add to Cart <ShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Deatisl;
