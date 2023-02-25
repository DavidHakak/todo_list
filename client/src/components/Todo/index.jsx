import React, { useState } from "react";
import styles from "./style.module.css";

function Todo({ todo }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <div className={`${styles.container} ${isChecked ? styles.checked : ""}`}>
      <span>{todo.description}</span>
      <input type="checkbox" onChange={handleCheckboxChange} />
    </div>
  );
}

export default Todo;
