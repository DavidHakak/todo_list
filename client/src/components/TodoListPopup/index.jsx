import Todo from "../Todo";
import styles from "./style.module.css";

function TodoListPopup({ header, todos }) {
  const todoNotChecked = [];
  const todoChecked = [];
  todos.filter((todo) => {
    todo.checked === true ? todoNotChecked.push(todo) : todoChecked.push(todo);
  });

  return (
    <div className={styles.todoList}>
      <header className={styles.listName}>{header}</header>

      <div className={styles.activeTodos}>
        {todoNotChecked.map((todo) => {
          return <Todo key={todo.id} todo={todo} todoId={todo.id} />;
        })}
      </div>

      <div
        className={`${todoChecked.length !== 0 ? styles.notActiveTodos : ""}`}
      >
        <div className={styles.done}>Done :</div>
        {todoChecked.map((todo) => {
          return <Todo key={todo.id} todo={todo} todoId={todo.id} />;
        })}
      </div>
    </div>
  );
}

export default TodoListPopup;
