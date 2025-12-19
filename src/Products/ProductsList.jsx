import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../Banner/Banner";

const ProductsList = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const perPage = 10;

  /* Fetch categories */
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      setCategoryList(data);
    }
    fetchCategories();
  }, []);

  /* Fetch products */
  useEffect(() => {
    async function fetchProducts() {
      let api = "";

      if (category) {
        api = `https://dummyjson.com/products/category/${category}`;
      } else if (search) {
        api = `https://dummyjson.com/products/search?q=${search}`;
      } else {
        api = "https://dummyjson.com/products?limit=100";
      }

      const { data } = await axios.get(api);
      const products = data.products || [];

      setTotalProducts(products.length);

      const paginatedData = products.slice(
        (page - 1) * perPage,
        page * perPage
      );

      setDataProducts(paginatedData);
    }

    fetchProducts();
  }, [search, category, page]);

  const totalPages = Math.ceil(totalProducts / perPage);

  return (
    /* 👇 THIS FIXES THE GAP (navbar height = 64px) */
    <>
    <Banner />
    <div className="pt-16 px-6 bg-gray-100 min-h-screen">
      
      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCategory("");
            setPage(1);
          }}
          className="w-full md:w-1/3 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSearch("");
            setPage(1);
          }}
          className="w-full md:w-1/3 p-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">All Categories</option>
          {categoryList.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataProducts.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />

              <h2 className="text-lg font-semibold truncate">
                {item.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-4 py-2 rounded-lg border ${
              page === num
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-blue-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductsList;
