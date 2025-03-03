import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import Table from "../../components/Table";
import Breadcrumb from "../../components/Breadcrumb";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("first_name"); // Default filter: Name
  const [genderFilter, setGenderFilter] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadUsers();
  }, [pageSize, page]);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, genderFilter, users]);

  const loadUsers = async () => {
    setLoading(true);
    const data = await fetchUsers(pageSize, (page - 1) * pageSize);
    setUsers(data.users || []);
    setLoading(false);
  };

  const applyFilters = () => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter((user) =>
        user[filterBy]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (genderFilter) {
      filtered = filtered.filter((user) => user.gender === genderFilter);
    }

    setFilteredUsers(filtered);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <Breadcrumb />
      <h2>Users List</h2>

      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <select onChange={(e) => setFilterBy(e.target.value)} className="border p-2 rounded">
          <option value="first_name">Name</option>
          <option value="email">Email</option>
          <option value="date_of_birth">Birth Date</option>
        </select>

        <input
          type="text"
          placeholder={`Search by ${filterBy}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />

        <select onChange={(e) => setGenderFilter(e.target.value)} className="border p-2 rounded">
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select onChange={(e) => setPageSize(e.target.value)} value={pageSize} className="border p-2 rounded">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <Table
          data={filteredUsers}
          columns={[
            { accessor: "first_name", header: "First Name" },
            { accessor: "last_name", header: "Last Name" },
            { accessor: "email", header: "Email" },
            { accessor: "date_of_birth", header: "Birth Date" },
            { accessor: "gender", header: "Gender" },
          ]}
        />
      )}
    </div>
  );
};

export default UsersPage;
