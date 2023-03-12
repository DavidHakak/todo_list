import styles from "./style.module.css";
import TodoList from "../TodoList";
import { useSelector } from "react-redux";
import AddNewTodoList from "../AddNewTodoList";
import { BsPlusCircleFill } from "react-icons/bs";
import { useContext } from "react";
import PopupContext from "../../context/PopupContext";

function Main() {
  const todoLists = useSelector((state) => state.todos.value);
  const modeLight = useSelector((state) => state.modeLight.value);

  const { setPopupContent } = useContext(PopupContext);

  const handleClickToAddList = () => {
    setPopupContent(<AddNewTodoList />);
  };

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
      <div
        className={`${styles.addTodoList} ${!modeLight ? styles.light : ""}`}
      >
        <div>
          <BsPlusCircleFill
            className={styles.plusIcon}
            fill={!modeLight ? "white" : ""}
            onClick={handleClickToAddList}
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
