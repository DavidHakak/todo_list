import styles from "./style.module.css";
import Todo from "../Todo";
import IconsLine from "../IconsLine";
import { useContext, useEffect, useState } from "react";
import PopupContext from "../../context/PopupContext";

function TodoList({ header, todos, listId, height, width }) {
  // const todoNotChecked = [];
  // const todoChecked = [];

  const { setPopupContent } = useContext(PopupContext);

  const handleOpenPopup = () => {
    setPopupContent(
      <TodoList
        header={header}
        todos={todos}
        listId={listId}
        height={"600px"}
        width={"450px"}
      />
    );
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const [todoNotChecked, setTodoNotChecked] = useState([]);
  const [todoChecked, setTodoChecked] = useState([]);

  useEffect(() => {
    let checkedList = [];
    let uncheckedList = [];

    todos.filter((todo) => {
      todo.checked === true ? checkedList.push(todo) : uncheckedList.push(todo);
    });

    setTodoNotChecked(uncheckedList);
    setTodoChecked(checkedList);
  }, [todos]);

  return (
    <div
      className={styles.todoListContainer}
      style={{ height: height, width: width }}
      onClick={(e) => handleClick(e)}
    >
      <div className={styles.todoList} id={listId}>
        <header className={styles.listName} onClick={handleOpenPopup}>
          {header}
        </header>

        <div className={styles.activeTodos}>
          {todoNotChecked.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                todoId={todo.id}
                listId={listId}
              />
            );
          })}
        </div>

        <div
          className={`${
            todoChecked.length !== 0 && todoNotChecked.length !== 0
              ? styles.notActiveTodos
              : ""
          }`}
        >
          {todoChecked.length !== 0 && (
            <div className={styles.done}>Done :</div>
          )}
          {todoChecked.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                todoId={todo.id}
                listId={listId}
              />
            );
          })}
        </div>
        <IconsLine listId={listId} />
      </div>
    </div>
  );
}

export default TodoList;
