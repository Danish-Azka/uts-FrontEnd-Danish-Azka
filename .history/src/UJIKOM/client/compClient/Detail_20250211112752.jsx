import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../../../service/apiProduct";
import { ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import NavCLient from "../NavCLient";

const Details = () => {
  const { id } = useParams(); // Ambil ID produk dari URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const data = await getProduct(); // Ambil semua produk
      const foundProduct = data.find((item) => item.id == id); // Cocokan ID

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate("/not-found"); // Jika tidak ditemukan, redirect ke Not Found
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-full h-full bg-[#f5f5f5]">
      <div className="sticky z-50 top-0 left-0 right-0">
        <NavCLient />
      </div>

      <div className="max-w-4xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
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
            className="w-14 h-14 border border-gray-400 rounded-full"
            src={product.Shop?.gambar}
            alt={product.Shop?.nama}
          />
          <p className="text-gray-700 text-sm">{product.Shop?.nama}</p>
        </div>

        <p className="text-gray-600 mt-3">{product.deskripsi}</p>
        <p className="mt-2">
          <strong>Kategori:</strong> {product.category}
        </p>
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
    </div>
  );
};

export default Details;
