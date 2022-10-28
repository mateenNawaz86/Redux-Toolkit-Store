import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Create a new slice for cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // redux toolkit allow you to mutate the state directly
      state.push(action.payload);
    },

    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// export the all actions inside this cartSlice
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
