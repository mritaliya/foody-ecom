import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/slices/CartSlice";
import SearchSlice from "./slices/SearchSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    search:SearchSlice
  },
});

export default store;
