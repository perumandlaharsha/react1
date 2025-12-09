import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsData = () => {
  let { id } = useParams();
  const [product, setProducts] = useState();

  useEffect(() => {
    async function productDetails() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProducts(data);
    }
    productDetails();
  }, [id]);

  if (!product) return <p>loading product...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">


      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-8 shadow-2xl rounded-3xl max-w-3xl w-full border border-gray-200 mt-12"
      >
        {/* Product Image */}
        <div className="w-full rounded-2xl overflow-hidden shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mt-6 mb-3 tracking-wide">
          {product.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          {product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border">
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          <p className="text-yellow-500 font-semibold text-lg">
            ⭐ {product.rating}
          </p>
        </div>

        {/* Category */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Category:</h2>
          <p className="text-gray-600 text-lg mt-1 capitalize">
            {product.category}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="w-1/2 bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition cursor-pointer">
            Add to Cart
          </button>

          <button className="w-1/2 bg-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-red-600 transition cursor-pointer">
            Remove from Cart
          </button>
           <Link
        to="/product"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        ← Back to Products
      </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsData;
