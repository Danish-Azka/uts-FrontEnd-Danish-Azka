
import axios from 'axios';

export const getShp = async () => {
  try {
    const response = await axios.get('http://localhost:3009/Shp/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching Shps:', error);
    return [];
  }
};

const API_URL = 'http://localhost:3009/Shp/post';

export const createShp = async (ShpData) => {
  try {
    const response = await axios.post(API_URL, ShpData);
    return response.data;
  } catch (error) {
    console.error('Error creating Shp:', error);
    throw error;
  }
};

export const deleteShp = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3009/Shp/delete/${id}`);
      return response.data
  } catch (error){
    console.error("error deleting Shp", error);
    throw(error);
  }
};

export const getShpById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3009/Shp/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Shp:", error);
    throw error;
  }
};

export const editShp = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3009/Shp/update/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating Shp:", error);
    throw error;
  }
};
