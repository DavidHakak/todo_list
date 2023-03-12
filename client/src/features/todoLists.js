import { createSlice } from "@reduxjs/toolkit";
import updateArrayListsInLS from "../localStorage";

let initialStateValue = [];

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: { value: initialStateValue, myAllLists: [] },
  reducers: {
    setMyAllLists: (state, action) => {
      state.myAllLists = action.payload;
      state.value = action.payload;
      updateArrayListsInLS(state.value);
    },

    addNewTodoList: (state, action) => {
      const newState = [...state.value, action.payload];

      state.myAllLists = newState;
      state.value = newState;

      updateArrayListsInLS(state.value);
    },

    addNewTodoInList: (state, action) => {
      if (action.payload.todoName) {
        const listIndex = state.value.findIndex(
          (list) => list.id === action.payload.listId
        );

        const currentTodoList = state.value[listIndex].todos;

        const newTodoId = currentTodoList[currentTodoList.length - 1].id;

        const newTodo = {
          id: newTodoId + 1,
          description: action.payload.todoName,
          checked: false,
        };

        state.value = [
          ...state.value.slice(0, listIndex),
          {
            ...state.value[listIndex],
            todos: [...currentTodoList, newTodo],
          },
          ...state.value.slice(listIndex + 1),
        ];

        updateArrayListsInLS(state.value);
      }
    },

    deleteTodoInList: (state, action) => {
      const listIndex = state.value.findIndex(
        (list) => list.id === action.payload.listId
      );

      const todoIndex = state.value[listIndex].todos.findIndex(
        (todo) => todo.id === action.payload.todoId
      );

      const currentTodosList = state.value[listIndex].todos;

      state.value = [
        ...state.value.slice(0, listIndex),
        {
          ...state.value[listIndex],
          todos: [
            ...currentTodosList.slice(0, todoIndex),
            ...currentTodosList.slice(todoIndex),
          ],
        },
        ...state.value.slice(listIndex + 1),
      ];

      state.value[listIndex].todos.splice(todoIndex, 1);

      updateArrayListsInLS(state.value);
    },

    deleteTodoList: (state, action) => {
      state.value = [
        ...state.value.filter((todo) => todo.id !== action.payload.listId),
      ];

      updateArrayListsInLS(state.value);
    },

    updateTodoChecked: (state, action) => {
      const listIndex = state.value.findIndex(
        (list) => list.id === action.payload.listId
      );

      const todoIndex = state.value[listIndex].todos.findIndex(
        (todo) => todo.id === action.payload.todoId
      );

      const currentTodosList = state.value[listIndex].todos;
      const currentTodo = state.value[listIndex].todos[todoIndex];

      const newState = [
        ...state.value.slice(0, listIndex),
        {
          ...state.value[listIndex],
          todos: [
            ...currentTodosList.slice(0, todoIndex),
            { ...currentTodo, checked: action.payload.checked },
            ...currentTodosList.slice(todoIndex + 1),
          ],
        },
        ...state.value.slice(listIndex + 1),
      ];

      state.value = newState;

      updateArrayListsInLS(state.value);
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

      updateArrayListsInLS(state.value);
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
  searchList,
  returnAllListToStateValue,
  removeAll,
} = todoListsSlice.actions;

export default todoListsSlice.reducer;
