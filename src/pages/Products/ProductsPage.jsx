import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/api";
import Table from "../../components/Table";
import Breadcrumb from "../../components/Breadcrumb";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [pageSize, setPageSize] = useState(5);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadProducts();
  }, [category, pageSize, page]);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, products]);

  const loadProducts = async () => {
    setLoading(true);
    const data = await fetchProducts(pageSize, (page - 1) * pageSize, category !== "all" ? category : "");
    setProducts(data.products || []);
    setLoading(false);
  };

  const applyFilters = () => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <Breadcrumb />
      <h2>Products List</h2>

      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <select onChange={(e) => setCategory(e.target.value)} value={category} className="border p-2 rounded">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>

        <input
          type="text"
          placeholder="Search by Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />

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
          data={filteredProducts}
          columns={[
            { accessor: "title", header: "Title" },
            { accessor: "brand", header: "Brand" },
            { accessor: "category", header: "Category" },
          ]}
        />
      )}
    </div>
  );
};

export default ProductsPage;
