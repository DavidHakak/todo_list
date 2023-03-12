import { createSlice } from "@reduxjs/toolkit";

const modeLiteSlice = createSlice({
  name: "modeLite",
  initialState: { value: false },
  reducers: {
    toggleModeLite: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { toggleModeLite } = modeLiteSlice.actions;

export default modeLiteSlice.reducer;
