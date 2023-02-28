import styles from "./style.module.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodoList, addNewTodoInList } from "../../features/todos";
import { useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

function IconsLine({ listId }) {
  const [showIcons, setShowIcons] = useState(true);

  const totoName = useRef("");

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteTodoList({ listId }));
  };

  const handleAddTodo = () => {
    setShowIcons(true);
    dispatch(addNewTodoInList({ listId: listId, todoName: totoName }));
  };

  return (
    <div className={styles.iconsLineContainer}>
      {showIcons ? (
        <>
          <div className={styles.icon}>
            <BsTrash onClick={handleRemove} />
          </div>
          <div className={styles.icon}>
            <AiOutlinePlusCircle onClick={() => setShowIcons(false)} />
          </div>
        </>
      ) : (
        <div className={styles.containerInputSubmit}>
          <input type="text" placeholder="Todo Name :" ref={totoName} />
          <BsArrowRightCircle onClick={handleAddTodo} />
        </div>
      )}
    </div>
  );
}

export default IconsLine;
