import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState: { value: initialStateValue },
  reducers: {
    openSearchInput: (state, action) => {
      state.value = true;
    },
    closeSearchInput: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { openSearchInput, closeSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
