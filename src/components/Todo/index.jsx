import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { updateTodoChecked, deleteTodoInList } from "../../features/todoLists";
import styles from "./style.module.css";

function Todo({ todo, todoId, listId }) {
  const [showDelete, setShowDelete] = useState(false);
  const [isChecked, setIsChecked] = useState(todo.checked);
  const dispatch = useDispatch();

  function handleCheckboxChange() {
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
      <label htmlFor={Date.now().toString()} dir="auto">
        {todo.description}
      </label>
      <input
        type="checkbox"
        name="checked"
        defaultChecked={isChecked}
        id={Date.now().toString()}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}

export default Todo;
