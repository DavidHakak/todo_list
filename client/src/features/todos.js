import { createSlice } from "@reduxjs/toolkit";

let initialStateValue = [];

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: { value: initialStateValue, myAllLists: [] },
  reducers: {
    setMyAllLists: (state, action) => {
      state.myAllLists = action.payload;
      state.value = action.payload;
    },

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

        const currentTodoList = state.value[listIndex].todos;

        const newTodoId = currentTodoList[currentTodoList.length - 1].id;

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
        const filteredLists = state.value.filter((list) =>
          list.header
            .toLocaleLowerCase()
            .startsWith(action.payload.value.toLocaleLowerCase())
        );
        state.value = filteredLists;
      } else {
        state.value = state.myAllLists;
      }
    },

    returnAllListToStateValue: (state, action) => {
      state.value = state.myAllLists;
    },

    removeAll: (state, action) => {
      state.value = [];
      const newTodoLists = state.value;
      localStorage.setItem("myLists", JSON.stringify(newTodoLists));
    },
  },
});

export const {
  setMyAllLists,
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
