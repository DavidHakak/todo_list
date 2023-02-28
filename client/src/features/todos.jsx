import { createSlice } from "@reduxjs/toolkit";

const todoLists = [
  {
    id: 1,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: false },
      { id: 2, description: "Wash dishes", checked: true },
      { id: 3, description: "Buy groceries", checked: false },
      { id: 4, description: "Do laundry", checked: false },
      { id: 5, description: "Wash dishes", checked: true },
      { id: 6, description: "Buy groceries", checked: false },
      { id: 7, description: "Do laundry", checked: false },
      { id: 8, description: "Wash dishes", checked: true },
      { id: 9, description: "Buy groceries", checked: true },
    ],
  },
  {
    id: 2,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: true },
      { id: 2, description: "Take out the trash", checked: true },
      { id: 3, description: "Mow the lawn", checked: true },
    ],
  },
  {
    id: 3,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: false },
      { id: 2, description: "Wash dishes", checked: false },
      { id: 3, description: "Buy groceries", checked: false },
    ],
  },
  {
    id: 4,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: false },
      { id: 2, description: "Take out the trash", checked: true },
      { id: 3, description: "Mow the lawn", checked: false },
    ],
  },
  {
    id: 5,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: true },
      { id: 2, description: "Wash dishes", checked: false },
      { id: 3, description: "Buy groceries", checked: true },
    ],
  },
  {
    id: 6,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: false },
      { id: 2, description: "Take out the trash", checked: false },
      { id: 3, description: "Mow the lawn", checked: false },
    ],
  },
  {
    id: 7,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: false },
      { id: 2, description: "Wash dishes", checked: true },
      { id: 3, description: "Buy groceries", checked: false },
    ],
  },
  {
    id: 8,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: false },
      { id: 2, description: "Take out the trash", checked: true },
      { id: 3, description: "Mow the lawn", checked: false },
    ],
  },
  {
    id: 9,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: true },
      { id: 2, description: "Wash dishes", checked: false },
      { id: 3, description: "Buy groceries", checked: false },
    ],
  },
  {
    id: 10,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: false },
      { id: 2, description: "Take out the trash", checked: true },
      { id: 3, description: "Mow the lawn", checked: false },
    ],
  },
  {
    id: 11,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: false },
      { id: 2, description: "Wash dishes", checked: true },
      { id: 3, description: "Buy groceries", checked: false },
    ],
  },
  {
    id: 12,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: true },
      { id: 2, description: "Take out the trash", checked: false },
      { id: 3, description: "Mow the lawn", checked: true },
    ],
  },
  {
    id: 13,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: false },
      { id: 2, description: "Wash dishes", checked: true },
      { id: 3, description: "Buy groceries", checked: false },
    ],
  },
  {
    id: 14,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: true },
      { id: 2, description: "Take out the trash", checked: false },
      { id: 3, description: "Mow the lawn", checked: false },
    ],
  },
  {
    id: 15,
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", checked: true },
      { id: 2, description: "Wash dishes", checked: false },
      { id: 3, description: "Buy groceries", checked: false },
    ],
  },
  {
    id: 16,
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", checked: false },
      { id: 2, description: "Take out the trash", checked: true },
      { id: 3, description: "Mow the lawn", checked: false },
    ],
  },
];

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: { value: todoLists },
  reducers: {
    addNewTodoList: (state, action) => {
      state.value.push(action.payload);
    },

    addNewTodoInList: (state, action) => {
      let listIndex = "";
      let todoId = "";
      state.value.find((todo, index) =>
        todo.id === action.payload.listId ? listIndex === index : ""
      );
      todoId =
        state.value[listIndex].todos[state.value[listIndex].todos.length - 1]
          .id;
      state.value[listIndex].todos.push({
        id: todoId + 1,
        description: action.payload.todoName,
        checked: false,
      });
      console.log(state.value);
    },

    deleteTodoList: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
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
  },
});

export const {
  addNewTodoList,
  addNewTodoInList,
  deleteTodoList,
  updateTodoChecked,
  updateTodoListHeader,
  updateTodoInList,
} = todoListsSlice.actions;

export default todoListsSlice.reducer;
