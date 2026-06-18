import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (itemExists) {
        itemExists.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        item => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;