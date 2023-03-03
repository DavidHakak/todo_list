import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import sideBarReducer from "./sideBar";
import searchInputReducer from "./searchInput";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    sideBar: sideBarReducer,
    searchInput: searchInputReducer,
  },
});

export default store;
