import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-400 text-black shadow-md">
      <div className="font-bold text-xl">Fullstack Assessment</div>
      <div className="space-x-4 flex items-center">
        <Link to="/users" className="hover:underline">Users</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        
        {/* Only show Logout button if the user is logged in */}
        {isAuthenticated && (
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
