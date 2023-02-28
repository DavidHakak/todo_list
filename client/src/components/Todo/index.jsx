import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./style.module.css";
import { updateTodoChecked } from "../../features/todos";

function Todo({ todo, todoId, listId }) {
  const [isChecked, setIsChecked] = useState(!todo.checked);
  const dispatch = useDispatch();

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    dispatch(
      updateTodoChecked({
        listId: listId,
        todoId: todoId,
        checked: isChecked,
      })
    );
  }

  return (
    <div className={`${styles.container} ${isChecked ? styles.checked : ""}`}>
      <label>
        {todo.description}
        <input
          type="checkbox"
          checked={isChecked}
          id={todoId}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}

export default Todo;
