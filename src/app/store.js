import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/Cart/CartSlice";
import CategorySlice from "./slices/Category/CategorySlice";
import ProductSlice from "./slices/Product/ProductSlice";

const store = configureStore(
  {
    reducer: {
      categories: CategorySlice,
      products: ProductSlice,
      carts: CartSlice,
    },
  },
  
);


export default store;
