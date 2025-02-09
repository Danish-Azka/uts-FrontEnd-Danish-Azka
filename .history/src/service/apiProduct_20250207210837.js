
import axios from 'axios';

export const getProduct = async () => {
  try {
    const response = await axios.get('http://localhost:3009/product/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductByShopId = async (req, res) => {
  try {
      const { shopId } = req.params;
      const products = await Product.findAll({
          where: { ShopId: shopId }
      });

      if (products.length === 0) {
          return res.status(404).json({ message: 'Tidak ada produk untuk ShopId ini' });
      }

      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const API_URL = 'http://localhost:3009/product/post';

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;    
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3009/product/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting product", error);
    throw(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
export const getProductByShopId = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const editProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3009/product/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
