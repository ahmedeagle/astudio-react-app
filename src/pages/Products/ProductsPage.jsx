
import { useAppContext } from "../../context/AppContext";
import Table from "../../components/Table";
import { useState } from "react";

const ProductsPage = () => {
  const { products, filters, setFilters } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const handlePageSizeChange = (e) => {
    setFilters((prev) => ({ ...prev, pageSize: Number(e.target.value), page: 1 }));
  };

  const handleFilterChange = (field, value) => {
    setFilters({ [field]: value, page: 1, search: "" }); // Reset other filters when one is applied
  };

  const handlePageChange = (direction) => {
    setFilters((prev) => ({
      ...prev,
      page: Math.max(1, prev.page + direction),
    }));
  };

  // Category Tabs Handler
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFilters({ category: category === "ALL" ? "" : category, page: 1, search: "" });
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Title", accessor: "title" },
    { header: "Brand", accessor: "brand" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    { header: "Rating", accessor: "rating" },
    { header: "Description", accessor: "description" },
    { header: "Discount", accessor: "discountPercentage" },
    { header: "Thumbnail", accessor: "thumbnail" },
  ];

  return (
    <div className="container mx-auto p-6 bg-grey min-h-screen font-neutra">
      <h1 className="text-3xl font-bold mb-6 text-black">Products</h1>

      {/* Category Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleCategoryChange("ALL")}
          className={`px-6 py-2 rounded-md font-semibold ${selectedCategory === "ALL" ? "bg-blue text-white" : "bg-gray-300 hover:bg-gray-400"}`}
        >
          ALL
        </button>
        <button
          onClick={() => handleCategoryChange("laptops")}
          className={`px-6 py-2 rounded-md font-semibold ${selectedCategory === "laptops" ? "bg-blue text-white" : "bg-gray-300 hover:bg-gray-400"}`}
        >
          Laptops
        </button>
      </div>

      {/* Filters Section */}
      <div className="flex justify-between mb-4">
        {/* Search Icon & Input */}
        <div className="flex items-center space-x-2">
          <button onClick={() => setShowSearch(!showSearch)} className="bg-yellow p-2 rounded-full">
            🔍
          </button>
          {showSearch && (
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
              value={filters.search}
              onChange={handleSearchChange}
            />
          )}
        </div>

        {/* Page Size Dropdown */}
        <select
          value={filters.pageSize}
          onChange={handlePageSizeChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Filter by Title"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
          onChange={(e) => handleFilterChange("title", e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Brand"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
          onChange={(e) => handleFilterChange("brand", e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Category"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
          onChange={(e) => handleFilterChange("category", e.target.value)}
        />
      </div>

      {/* Table */}
      <Table data={products} columns={columns} />

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => handlePageChange(-1)}
          className={`px-6 py-2 rounded-md font-semibold border ${filters.page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue text-white hover:bg-blue-700"}`}
          disabled={filters.page === 1}
        >
          Previous
        </button>
        <span className="text-gray-700 font-semibold">Page {filters.page}</span>
        <button
          onClick={() => handlePageChange(1)}
          className={`px-6 py-2 rounded-md font-semibold border ${products.length < filters.pageSize ? "bg-gray-300 cursor-not-allowed" : "bg-blue text-white hover:bg-blue-700"}`}
          disabled={products.length < filters.pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;
