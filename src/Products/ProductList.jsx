import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProductList = () => {
  let [dataP, setDataP] = useState([]);
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState("");
  let [categoryList, setCategoryList] = useState([]);
  let [page, setPage] = useState(1);
  let [btn, setBtn] = useState(0);

  let perPage = 9;

  // Fetch categories
  useEffect(() => {
    async function dataApi() {
      let { data } = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      setCategoryList(data);
    }
    dataApi();
  }, []);

  // Fetch products (search / category / default)
  useEffect(() => {
    async function fetchApi() {
      let api;

      if (category) {
        api = `https://dummyjson.com/products/category/${category}`;
      } else if (search) {
        api = `https://dummyjson.com/products/search?q=${search}`;
      } else {
        api = `https://dummyjson.com/products?limit=100`;
      }

      let { data } = await axios.get(api);
      let allProducts = data.products || [];

      setBtn(allProducts.length);

      let pagination = allProducts.slice((page - 1) * perPage, page * perPage);
      setDataP(pagination);
    }

    fetchApi();
  }, [category, search, page]);

  let viewBtn = Math.ceil(btn / perPage);

  return (
    <div className="p-6">
      {/* Search + Category Filter */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
            setCategory("");
          }}
          className="border p-3 rounded-lg w-64 shadow-sm focus:ring focus:ring-blue-300"
        />

        <select
          onChange={(e) => {
            setPage(1);
            setCategory(e.target.value);
            setSearch("");
          }}
          className="border p-3 rounded-lg shadow-sm w-64 focus:ring focus:ring-blue-300"
        >
          <option value="">All Categories</option>
          {Array.isArray(categoryList) &&
            categoryList.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}

          {categoryList.map((item, i) => (
            <option value={item} key={i} className="capitalize">
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataP.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition cursor-pointer"
          >
            <img
              src={item.thumbnail}
              alt=""
              className="h-40 w-full object-cover rounded-lg mb-3"
            />

            <h1 className="font-bold text-lg mb-1">{item.title}</h1>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {item.description}
            </p>

            <div className="font-bold text-blue-600">₹{item.price}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {viewBtn > 0 &&
          Array.from({ length: viewBtn }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-2 rounded-lg border shadow-sm 
                ${
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
  );
};
