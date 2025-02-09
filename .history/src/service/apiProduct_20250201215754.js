
import axios from 'axios';

export const get = async () => {
  try {
    const response = await axios.get('http://localhost:3009//get');
    return response.data;
  } catch (error) {
    console.error('Error fetching s:', error);
    return [];
  }
};

const API_URL = 'http://localhost:3009//post';

export const create = async (Data) => {
  try {
    const response = await axios.post(API_URL, Data);
    return response.data;
  } catch (error) {
    console.error('Error creating :', error);
    throw error;
  }
};

export const delete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3009//delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting ", error);
    throw(error);
  }
};

export const getById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009//${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw error;
  }
};

export const edit = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3009//update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating :", error);
    throw error;
  }
};
