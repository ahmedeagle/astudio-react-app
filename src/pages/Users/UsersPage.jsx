
import { useAppContext } from "../../context/AppContext";
import Table from "../../components/Table";
import { useState } from "react";

const UsersPage = () => {
  const { users, filters, setFilters } = useAppContext();
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

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Email", accessor: "email" },
    { header: "Gender", accessor: "gender" },
    { header: "Age", accessor: "age" },
    { header: "Phone", accessor: "phone" },
    { header: "Company", accessor: "company.name" },
    { header: "City", accessor: "address.city" },
    { header: "State", accessor: "address.state" },
    { header: "Postal Code", accessor: "address.postalCode" },
    { header: "Birth Date", accessor: "birthDate" },
  ];

  return (
    <div className="container mx-auto p-6 bg-grey min-h-screen font-neutra">
      <h1 className="text-3xl font-bold mb-6 text-black">Users</h1>

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
              placeholder="Search users..."
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
          placeholder="Filter by First Name"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
          onChange={(e) => handleFilterChange("firstName", e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Gender"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by City"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue"
          onChange={(e) => handleFilterChange("address.city", e.target.value)}
        />
      </div>

      {/* Table */}
      <Table data={users} columns={columns} />

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
          className={`px-6 py-2 rounded-md font-semibold border ${users.length < filters.pageSize ? "bg-gray-300 cursor-not-allowed" : "bg-blue text-white hover:bg-blue-700"}`}
          disabled={users.length < filters.pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
