import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    category: null,
    name: null,
    color: null,
    counter: 1,
    size: null,
    img: null,
    price: null,
    id: null,
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
    uptadeProduct: (state, action) => {
      const { category, name, image, price, color } = action.payload;
      state.category = category;
      state.name = name;
      state.img = image;
      state.price = price;
      state.color = color;
      state.id = Math.random().toString();
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
      state.counter = +action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
