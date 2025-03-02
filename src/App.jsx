// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const UsersPage = lazy(() => import("./pages/Users/UsersPage"));
const ProductsPage = lazy(() => import("./pages/Products/ProductsPage"));

function App() {
  return (
    <div className="min-h-screen bg-grey text-black p-6">
      <nav className="flex gap-6 mb-4 border-b pb-2">
        <Link to="/users" className="text-blue font-bold hover:underline">Users</Link>
        <Link to="/products" className="text-blue font-bold hover:underline">Products</Link>
      </nav>
      <Suspense fallback={<div className="text-center py-4 text-blue font-semibold animate-pulse">Loading...</div>}>
        <Routes>
          <Route
            path="/users"
            element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <UsersPage />
              </motion.div>
            }
          />
          <Route
            path="/products"
            element={
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <ProductsPage />
              </motion.div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
