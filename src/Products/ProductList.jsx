import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function apiEndPoint() {
      const { data }= await axios.get("https://dummyjson.com/products");
      setData(data.products);
    }
    apiEndPoint();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{product.category}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-green-600">
                  ${product.price}
                </span>
                <span className="text-sm bg-yellow-200 px-2 py-1 rounded-md">
                  ⭐ {product.rating}
                </span>
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
