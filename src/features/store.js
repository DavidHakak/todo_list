import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoLists";
import searchInputReducer from "./searchInput";
import modeLightReducer from "./modeLight";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    searchInput: searchInputReducer,
    modeLight: modeLightReducer,
  },
});

export default store;
