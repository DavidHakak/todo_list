import styles from "./style.module.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteTodoList, addNewTodoInList } from "../../features/todoLists";
import { useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useContext } from "react";
import PopupContext from "../../context/PopupContext";

function IconsLine({ listId }) {
  const { setPopupContent, popupContent } = useContext(PopupContext);
  const [showIcons, setShowIcons] = useState(true);

  const todoName = useRef("");

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteTodoList({ listId }));
    if (popupContent) {
      setPopupContent(null);
    }
  };

  const handleAddTodo = () => {
    setShowIcons(true);
    dispatch(
      addNewTodoInList({ listId: listId, todoName: todoName.current.value })
    );
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
          <input type="text" placeholder="Todo Name :" ref={todoName} />
          <BsArrowRightCircle onClick={handleAddTodo} />
        </div>
      )}
    </div>
  );
}

export default IconsLine;
