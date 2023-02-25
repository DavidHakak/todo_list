import React, { useState } from "react";
import styles from "./style.module.css";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";

function Main() {
  const todos = useSelector((state) => state.todos.value);

  return (
    <main className={styles.main}>
      {todos.map((todo, index) => {
        return <TodoList key={index} header={todo.header} todos={todo.todos} />;
      })}
    </main>
  );
}

export default Main;
