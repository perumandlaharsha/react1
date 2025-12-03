import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { PageNumbers } from "../Regex/PageNumbers";

export default function ProductsList() {
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let perPage = 10;

  const apiEndPoint = axios.get("https://dummyjson.com/products/?limit=100");

  useEffect(() => {
    async function dataP() {
      let { data } = await apiEndPoint;
      setData(data.products);
    }
    dataP();
  }, []);

  let pagination = data.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
        Products
      </h1>

      {/* Products Grid */}
      {pagination.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pagination.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {item.description.slice(0, 100)}...
              </p>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-lg">Loading...</p>
      )}

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {PageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-4 py-2 rounded-md font-medium transition duration-300 ${
              page === num
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}