
import axios from 'axios';

export const getcart = async () => {
  try {
    const response = await axios.get('http://localhost:3009/cart/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching carts:', error);
    return [];
  }
};

const API_URL = 'http://localhost:3009/cart/post';

export const createcart = async (cartData) => {
  try {
    const response = await axios.post(API_URL, cartData);
    return response.data;
  } catch (error) {
    console.error('Error creating cart:', error);
    throw error;
  }
};

export const deletecart = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3009/cart/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting Employe", error);
    throw(error);
  }
};

export const getcartById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching client:", error);
    throw error;
  }
};

export const editcart = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3009/cart/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};