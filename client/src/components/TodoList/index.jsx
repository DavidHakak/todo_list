import React, { useState } from "react";
import styles from "./style.module.css";
import Todo from "../Todo";
import TodoListPopup from "../TodoListPopup";
import { useDispatch } from "react-redux";
import IconsLine from "../IconsLine";

function TodoList({ header, todos, listId }) {
  const todoNotChecked = [];
  const todoChecked = [];

  const dispatch = useDispatch();
  const handleClick = () => {};

  todos.filter((todo) => {
    todo.checked === true ? todoNotChecked.push(todo) : todoChecked.push(todo);
  });

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoList} id={listId} onClick={handleClick}>
        <header className={styles.listName}>{header}</header>

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
