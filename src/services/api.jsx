import axios from "axios";

// Load API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://app:8000/api";
const PRODUCTS_API = "https://dummyjson.com/products";

// Retrieve token from local storage
const getToken = () => localStorage.getItem("token");

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization token automatically
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle API response errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login.");
      localStorage.removeItem("token");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default apiClient;

// Fetch Users API
export const fetchUsers = async (limit = 5, skip = 0) => {
  try {
    const response = await apiClient.get(`/users?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { users: [] };
  }
};

// Fetch Products API
export const fetchProducts = async (limit = 5, skip = 0, category = "") => {
  try {
    const url = category ? `${PRODUCTS_API}/category/${category}` : `${PRODUCTS_API}`;
    const response = await axios.get(`${url}?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] };
  }
};
