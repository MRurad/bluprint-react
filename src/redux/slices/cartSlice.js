import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const exsitingProduct = state.find(
        (item) => item.id === newProduct.id && item.size === newProduct.size
      );
      const sameId = state.find(
        (item) => item.id === newProduct.id && item.size !== newProduct.size
      );
      if (sameId) {
        sameId.id = Math.random().toString();
      }

      if (exsitingProduct) {
        exsitingProduct.counter += +newProduct.counter;
        exsitingProduct.totalPrice =
          exsitingProduct.counter * exsitingProduct.price;
      } else {
        state.push(newProduct);
        newProduct.totalPrice = newProduct.counter * newProduct.price;
      }
    },
    increase: (state, action) => {
      const id = action.payload;
      const myProduct = state.find((item) => item.id === id);
      myProduct.counter++;
      myProduct.totalPrice = myProduct.counter * myProduct.price;
    },
    decrease: (state, action) => {
      const id = action.payload;
      const myProduct = state.find((item) => item.id === id);
      const myProductIndex = state.findIndex((item) => item.id === id);
      if (myProduct.counter > 1) {
        myProduct.counter--;
        myProduct.totalPrice = myProduct.counter * myProduct.price;
      } else {
        state.splice(myProductIndex, 1);
      }
    },
    setCounter: (state, action) => {
      const { id, value } = action.payload;
      const myProduct = state.find((item) => item.id === id);
      myProduct.counter = +value;
      myProduct.totalPrice = myProduct.counter * myProduct.price;
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      const myProductIndex = state.findIndex((item) => item.id === id);
      state.splice(myProductIndex, 1);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
