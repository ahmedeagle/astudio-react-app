import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import UsersPage from "./pages/Users/UsersPage";
import ProductsPage from "./pages/Products/ProductsPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const token = localStorage.getItem("token"); // Check if user is logged in

  return (
    <Routes>
      {/* Redirect `/` based on authentication */}
      <Route path="/" element={token ? <Navigate to="/products" /> : <Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
