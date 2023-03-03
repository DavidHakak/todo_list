import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css";

function AddNewTodoList() {
  const todoLists = useSelector((state) => state.todos.value);

  const newList = {
    id: null,
    header: null,
    todos: [],
  };

  const [title, setTitle] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      newList.id = todoLists.length + 1;
      newList.header = e.target.value;
      console.log(newList);
    }
  };

  const handleListItemChange = (e, index) => {
    const newListItems = [...listItems];
    newListItems[index] = e.target.value;
    setListItems(newListItems);
  };

  const handleAddListItem = () => {
    setListItems([...listItems, ""]);
  };

  return (
    <div className={styles.addNewTodoListContainer}>
      <header className={styles.header}>
        <label htmlFor="title-input">List Title:</label>
        <input
          id="title-input"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </header>
      <main className={styles.main}>
        {listItems.map((item, index) => (
          <input
            type="text"
            value={item}
            onChange={(e) => handleListItemChange(e, index)}
          />
        ))}
        <div className={styles.buttonAddTodo}>
          <button onClick={handleAddListItem}>Add Item</button>
        </div>
      </main>
    </div>
  );
}

export default AddNewTodoList;
