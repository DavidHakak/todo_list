import { createSlice } from "@reduxjs/toolkit";

const todoListString = JSON.parse(localStorage.getItem("myLists"));

let todoLists = todoListString;

let initialStateValue = [];

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: { value: todoLists },
  reducers: {
    addNewTodoList: (state, action) => {
      state.value.push(action.payload);

      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },

    addNewTodoInList: (state, action) => {
      if (action.payload.todoName) {
        const listIndex = state.value.findIndex(
          (list) => list.id === action.payload.listId
        );

        const newTodoId =
          state.value[listIndex].todos[state.value[listIndex].todos.length - 1]
            .id;

        state.value[listIndex].todos.push({
          id: newTodoId + 1,
          description: action.payload.todoName,
          checked: false,
        });
      }

      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },

    deleteTodoInList: (state, action) => {
      const listIndex = state.value.findIndex(
        (list) => list.id === action.payload.listId
      );

      const todoIndex = state.value[listIndex].todos.findIndex(
        (todo) => todo.id === action.payload.todoId
      );

      state.value[listIndex].todos.splice(todoIndex, 1);

      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },

    deleteTodoList: (state, action) => {
      state.value = state.value.filter(
        (todo) => todo.id !== action.payload.listId
      );
      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },

    updateTodoChecked: (state, action) => {
      let listIndex = "";
      let todoIndex = "";

      state.value.find((list, index) =>
        list.id === action.payload.listId ? (listIndex = index) : null
      );
      state.value[listIndex].todos.find((todo, index) =>
        todo.id === action.payload.todoId ? (todoIndex = index) : null
      );

      state.value[listIndex].todos[todoIndex].checked = action.payload.checked;

      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },

    updateTodoListHeader: (state, action) => {
      state.value.filter((todo) =>
        todo.id === action.payload.id
          ? (todo.header = action.payload.header)
          : null
      );
    },

    updateTodoInList: (state, action) => {
      state.value.map((todo) =>
        todo.header === action.payload.header
          ? (todo.header = action.payload.header)
          : null
      );
    },

    searchList: (state, action) => {
      action.payload.value = action.payload.value.trim();
      if (action.payload.value.length > 0) {
        initialStateValue = state.value.filter((list) =>
          list.header
            .toLocaleLowerCase()
            .startsWith(action.payload.value.toLocaleLowerCase())
        );
        state.value = initialStateValue;
      } else {
        state.value = todoLists;
      }
    },

    returnAllListToStateValue: (state, action) => {
      state.value = todoLists;
    },

    removeAll: (state, action) => {
      state.value = [];
      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },
  },
});

export const {
  addNewTodoList,
  addNewTodoInList,
  deleteTodoInList,
  deleteTodoList,
  updateTodoChecked,
  updateTodoListHeader,
  updateTodoInList,
  searchList,
  returnAllListToStateValue,
  removeAll,
} = todoListsSlice.actions;

export default todoListsSlice.reducer;
