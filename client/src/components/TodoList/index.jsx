import styles from "./style.module.css";
import Todo from "../Todo";
import IconsLine from "../IconsLine";
import { useContext, useEffect, useState } from "react";
import PopupContext from "../../context/PopupContext";
import { useSelector } from "react-redux";

function TodoList({ header, listId, height, width }) {
  const index = useSelector((state) => state.todos.value).findIndex(
    (todo) => todo.id === listId
  );

  const todos = useSelector((state) => state.todos.value[index].todos);

  const { setPopupContent } = useContext(PopupContext);

  const [todoNotChecked, setTodoNotChecked] = useState([]);
  const [todoChecked, setTodoChecked] = useState([]);

  const handleOpenPopup = () => {
    setPopupContent(
      <TodoList
        header={header}
        listId={listId}
        height={"600px"}
        width={"450px"}
      />
    );
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

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
