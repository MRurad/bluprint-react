import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      category: "Caps",
      name: "Varsity Cap",
      price: "13.99",
      image: "cap",
      color: "green",
      sizes: [
        { name: "xs", aviable: true },
        { name: "s", aviable: true },
        { name: "m", aviable: true },
        { name: "l", aviable: false },
        { name: "xl", aviable: true },
      ],
    },
    {
      id: 2,
      category: "T-shirts",
      name: "T-shirt",
      price: "24.99",
      image: "t-shirt",
      color: "black",
      sizes: [
        { name: "xs", aviable: true },
        { name: "s", aviable: false },
        { name: "m", aviable: true },
        { name: "l", aviable: false },
        { name: "xl", aviable: true },
      ],
    },
    {
      id: 3,
      category: "Trousers",
      name: "Ripped Printed Jogger",
      price: "13.99",
      image: "Trousers",
      color: "blue",
      sizes: [
        { name: "xs", aviable: true },
        { name: "s", aviable: false },
        { name: "m", aviable: true },
        { name: "l", aviable: true },
        { name: "xl", aviable: false },
      ],
    },
    {
      id: 4,
      category: "Hoodie",
      name: "Rick & Morty Printed Hoodie",
      price: "96",
      image: "Rickmorty",
      color: "black",
      sizes: [
        { name: "xs", aviable: false },
        { name: "s", aviable: true },
        { name: "m", aviable: false },
        { name: "l", aviable: true },
        { name: "xl", aviable: true },
      ],
    },
  ],
  reducers: {},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
