import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { ADDTOCART } from "../features/CartSlice";

const ProductsData = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function productDetails() {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProduct(data);
    }
    productDetails();
  }, [id]);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading product...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-6 md:p-10"
      >
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image - LEFT */}
          <div className="w-full">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Details - RIGHT */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {product.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border mb-6">
              <span className="text-2xl font-bold text-blue-600">
                ${product.price}
              </span>
              <span className="text-yellow-500 text-lg font-semibold">
                ⭐ {product.rating}
              </span>
            </div>

            <p className="text-gray-700 text-lg mb-6">
              <span className="font-semibold">Category:</span>{" "}
              <span className="capitalize">{product.category}</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition" onClick={()=>dispatch(ADDTOCART(product))}>
                Add to Cart
              </button>

              <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-red-600 transition">
                Remove from Cart
              </button>

              <Link
                to="/product"
                className="w-full text-center bg-gray-800 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-gray-900 transition"
              >
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsData;
