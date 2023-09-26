import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: [],
  reducers: {
    addcolor: (state, action) => {
      const color = action.payload;
      if (state.includes(color)) {
        const index = state.findIndex((c) => c === color);
        state.splice(index, 1);
      } else {
        state.push(color);
      }
    },
  },
});

export const colorActions = colorSlice.actions;

export default colorSlice.reducer;
