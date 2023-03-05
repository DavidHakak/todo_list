import styles from "./style.module.css";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";
import AddNewTodoList from "../AddNewTodoList";
import { BsPlusCircleFill } from "react-icons/bs";

function Main() {
  const todoLists = useSelector((state) => state.todos.value);

  return (
    <main className={styles.main}>
      {todoLists
        ? todoLists.map((todoList) => {
            return (
              <TodoList
                key={todoList.id}
                header={todoList.header}
                listId={todoList.id}
                height="400px"
                width="280px"
              />
            );
          })
        : ""}
      <div className={styles.addTodoList}>
        <div className={styles.plusIcon}>
          <BsPlusCircleFill fill="white" className={styles.plusIcon} />
        </div>
      </div>

      <AddNewTodoList />
    </main>
  );
}

export default Main;
