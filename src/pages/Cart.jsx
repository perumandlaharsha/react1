import { useDispatch, useSelector } from "react-redux";
import { INC, DEC } from "../features/CartSlice";

export const Cart = () => {
  const data = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        data.map(item => (
          <div
            key={item.id}
            className="bg-white flex flex-col sm:flex-row items-center gap-6 p-5 rounded-xl shadow mb-5"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>

            <div className="font-bold">
              ${item.price * item.quantity}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => dispatch(DEC(item.id))}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>

              <button
                onClick={() => dispatch(INC(item.id))}
                className="px-3 py-1 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
