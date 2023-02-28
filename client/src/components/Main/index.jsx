import styles from "./style.module.css";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";

function Main() {
  const todoLists = useSelector((state) => state.todos.value);

  return (
    <main className={styles.main}>
      {todoLists.map((todoList) => {
        return (
          <TodoList
            key={todoList.id}
            header={todoList.header}
            todos={todoList.todos}
            listId={todoList.id}
          />
        );
      })}
    </main>
  );
}

export default Main;
