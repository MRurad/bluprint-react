import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    category: null,
    name: null,
    counter: 1,
    size: null,
    img: null,
    price: null,
  },
  reducers: {
    selectSize: (state, action) => {
      const selectedSize = action.payload;
      if (selectedSize === state.size) {
        state.size = null;
      } else {
        state.size = selectedSize;
      }
    },
    increase: (state) => {
      state.counter++;
    },
    decrease: (state) => {
      if (state.counter > 1) {
        state.counter--;
      }
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
