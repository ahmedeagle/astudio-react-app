import axios from "axios";
import { API_BASE_URL } from "../config";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUsers = async (limit = 5, skip = 0) => {
  try {
    const response = await apiClient.get(`/users?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [] };
  }
};

export const fetchProducts = async (limit = 5, skip = 0, category = "") => {
  try {
    const response = await apiClient.get(`/products?limit=${limit}&skip=${skip}${category ? `&category=${category}` : ""}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] };
  }
};