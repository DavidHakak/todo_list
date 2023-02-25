import { createSlice } from "@reduxjs/toolkit";

const todos = [
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
      { id: 4, description: "Do laundry", completed: false },
      { id: 5, description: "Wash dishes", completed: false },
      { id: 6, description: "Buy groceries", completed: false },
      { id: 7, description: "Do laundry", completed: false },
      { id: 8, description: "Wash dishes", completed: false },
      { id: 9, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
  {
    header: "Chores",
    todos: [
      { id: 1, description: "Do laundry", completed: false },
      { id: 2, description: "Wash dishes", completed: false },
      { id: 3, description: "Buy groceries", completed: false },
    ],
  },
  {
    header: "Tasks",
    todos: [
      { id: 1, description: "Clean the house", completed: false },
      { id: 2, description: "Take out the trash", completed: false },
      { id: 3, description: "Mow the lawn", completed: false },
    ],
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: { value: todos },
  reducers: {
    addNewTodo: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addNewTodo } = todosSlice.actions;

export default todosSlice.reducer;
