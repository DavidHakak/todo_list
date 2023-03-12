import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodoList } from "../../features/todoLists";
import { BsTrash } from "react-icons/bs";
import styles from "./style.module.css";
import { useContext } from "react";
import PopupContext from "../../context/PopupContext";

function AddNewTodoList() {
  const todoLists = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  const { setPopupContent } = useContext(PopupContext);

  const newList = {
    id: null,
    header: null,
    todos: [],
  };

  const [title, setTitle] = useState("");
  const [listTodos, setListTodos] = useState([]);

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleListTodoChange = (e, index) => {
    const newListTodos = [...listTodos];
    newListTodos[index] = {
      id: index + 1,
      description: e.target.value,
      checked: false,
    };
    setListTodos(newListTodos);
  };

  const handleRemoveTodo = (e, index) => {
    const newListTodos = [...listTodos];
    newListTodos.splice(index, 1);
    setListTodos(newListTodos);
  };

  const handleAddListTodo = (e) => {
    setListTodos([...listTodos, ""]);
  };

  const handleSubmit = () => {
    newList.todos = [...listTodos];
    newList.id = Date.now();
    newList.header = title;
    dispatch(addNewTodoList(newList));
    setPopupContent(null);
  };

  return (
    <div
      className={styles.addNewTodoListContainer}
      onClick={(e) => handleClick(e)}
    >
      <div className={styles.addNewTodoList}>
        <header className={styles.header}>
          {!title ? (
            <label htmlFor="title-input" onClick={(e) => handleClick(e)}>
              List Title:
            </label>
          ) : (
            ""
          )}
          <input
            id="title-input"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </header>
        <main className={styles.main}>
          {listTodos.map((todo, index) => (
            <div className={styles.addTodoLine} key={index}>
              <input
                type="text"
                placeholder="Ether your todo"
                value={todo.description}
                onChange={(e) => handleListTodoChange(e, index)}
              />
              <div className={styles.trashIcon}>
                <BsTrash onClick={(e) => handleRemoveTodo(e, index)} />
              </div>
            </div>
          ))}
          <div className={`${styles.buttonAddTodo} ${styles.button}`}>
            <button onClick={(e) => handleAddListTodo(e)}>Add todo</button>
          </div>
        </main>
        <footer
          className={`${styles.footer} ${styles.button}`}
          onClick={handleSubmit}
        >
          <button>Add List</button>
        </footer>
      </div>
    </div>
  );
}

export default AddNewTodoList;
