import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dataCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.dataCart = [...state.dataCart, action.payload];
    },
    setCartData: (state, action) => {
      state.dataCart = action.payload;
    },
    removeFromCart: (state, action) => {
      state.dataCart = state.dataCart.filter(
        (product) => product.productId !== action.payload
      );
    },
    updateCart: (state, action) => {
      state.dataCart = state.dataCart.map((product) =>
        parseInt(product.productId) === action.payload.productId
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
    },
    incrementQuantity: (state, action) => {
      state.dataCart = state.dataCart.map((item) =>
        item.productId === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decrementQuantity: (state, action) => {
      state.dataCart = state.dataCart.map((item) =>
        item.productId === action.payload
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      );
    },
    clearCart: (state) => {
      state.dataCart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  setCartData,
} = cartSlice.actions;

export default cartSlice.reducer;
