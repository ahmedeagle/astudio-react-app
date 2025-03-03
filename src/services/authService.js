import apiClient from "./api";

// User Login
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post("/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

// User Logout
export const logoutUser = async () => {
  try {
    await apiClient.post("/logout");
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
