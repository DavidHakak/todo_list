const updateArrayListsInLS = (state) => {
  const newTodoLists = state;
  localStorage.setItem("myLists", JSON.stringify(newTodoLists));
};

export default updateArrayListsInLS;
