import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "./FetchProductsSlice";

export const CardAPI = () => {
  let { items, loading, error } = useSelector((state) => state.products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      {items.map((product) => (
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 object-cover rounded-lg mb-3"
          />
          <h1 className="text-lg font-semibold truncate">{product.title}</h1>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {product.description}
          </p>
        </div>
      ))}
    </>
  );
};
