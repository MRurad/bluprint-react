import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "size",
  initialState: [],
  reducers: {
    addsize: (state, action) => {
      const size = action.payload;
      if (state.includes(size)) {
        const index = state.findIndex((c) => c === size);
        state.splice(index, 1);
      } else {
        state.push(size);
      }
    },
  },
});

export const sizeActions = sizeSlice.actions;

export default sizeSlice.reducer;
