import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../../../service/apiProduct";
import { ShoppingCart, XCircle } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import NavCLient from "../compClient/NavCLient";
import { FaX } from "react-icons/fa6";

const Detail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = async () => {
    try {
      const data = await getProduct();
      const foundProduct = data.find((item) => item.id == id); 

      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate("/not-found");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-full h-full pb-10 bg-[#f5f5f5]">
      <div className="sticky z-50 top-0 left-0 right-0">
        <NavCLient />
      </div>

      <div className="max-w-4xl mx-auto rounded-xl mt-10 flex flex-col bg-white shadow-lg ">

        <div className="bg-black flex rounded-t-xl px-5 items-center py-3 justify-between ">
            <div onClick={() => navigate(-1)}><XCircle color="red"/></div>
            <h1 className="text-2xl font-bold mb-3 text-white">{product.nama}</h1>
        </div>

        
        </div>
      </div>
    </div>
  );
};

export default Detail;
