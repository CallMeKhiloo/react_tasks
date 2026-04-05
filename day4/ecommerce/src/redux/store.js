import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({ // this holds the state of the cart and provides methods to update it
  reducer: {
    cart: cartReducer,
  },
});

export default store;