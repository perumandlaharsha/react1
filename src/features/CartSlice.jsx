import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("data")) || [];

const initialState = Array.isArray(saved)
  ? saved.filter(item => item && item.id)
  : [];

const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    ADDTOCART: (state, action) => {
      const product = action.payload;
      if (!product || !product.id) return;

      const exist = state.find(item => item.id === product.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("data", JSON.stringify(state));
    },

    INC: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
      localStorage.setItem("data", JSON.stringify(state));
    },

    DEC: (state, action) => {
      const index = state.findIndex(i => i.id === action.payload);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }

      localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

export const { ADDTOCART, INC, DEC } = CartSlice.actions;
export default CartSlice.reducer;
