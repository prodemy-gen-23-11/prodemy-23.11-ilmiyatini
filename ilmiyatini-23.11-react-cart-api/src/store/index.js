import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
