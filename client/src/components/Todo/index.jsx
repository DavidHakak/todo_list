import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { updateTodoChecked, deleteTodoInList } from "../../features/todos";
import styles from "./style.module.css";

function Todo({ todo, todoId, listId }) {
  const [showDelete, setShowDelete] = useState(false);
  const [isChecked, setIsChecked] = useState(todo.checked);
  const dispatch = useDispatch();

  function handleCheckboxChange(e) {
    dispatch(
      updateTodoChecked({
        listId: listId,
        todoId: todoId,
        checked: !isChecked,
      })
    );
    setIsChecked(!isChecked);
  }

  const handleMouseOver = () => {
    setShowDelete(true);
  };

  const handleMouseLeave = () => {
    setShowDelete(false);
  };

  const handleDeleteTodo = () => {
    dispatch(
      deleteTodoInList({
        listId: listId,
        todoId: todoId,
      })
    );
  };

  return (
    <div
      className={`${styles.container} ${isChecked ? styles.checked : ""}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {showDelete && (
        <AiOutlineClose
          className={styles.deleteIcon}
          onClick={handleDeleteTodo}
        />
      )}
      <label>
        {todo.description}
        <input
          type="checkbox"
          defaultChecked={isChecked}
          id={todoId}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}

export default Todo;
