import React from "react";
import styles from "./style.module.css";
import Todo from "../Todo";

function TodoList({ header, todos }) {
  return (
    <div className={styles.todoList}>
      <header className={styles.listName}>{header}</header>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
