import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import searchInputReducer from "./searchInput";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    searchInput: searchInputReducer,
  },
});

export default store;
