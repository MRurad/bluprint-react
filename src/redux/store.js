import { configureStore } from "@reduxjs/toolkit";

// Slices
import categorySlice from "./slices/categorySlice";
import colorSlice from "./slices/colorSlice";
import sizeSlice from "./slices/sizeSlice";
import productsSlice from "./slices/productsSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    color: colorSlice,
    size: sizeSlice,
    products: productsSlice,
    product: productSlice,
  },
});

export default store;
