import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import sideBarReducer from "./sideBar";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    sideBar: sideBarReducer,
  },
});

export default store;
