import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: { value: initialStateValue },
  reducers: {
    openSideBar: (state, action) => {
      state.value = true;
    },
    closeSideBar: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { openPopup, closePopup } = sideBarSlice.actions;

export default sideBarSlice.reducer;
