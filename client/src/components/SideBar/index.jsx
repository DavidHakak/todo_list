import styles from "./style.module.css";
import { removeAll } from "../../features/todoLists";
import { openSearchInput } from "../../features/searchInput";
import { useDispatch, useSelector } from "react-redux";
import PopupContext from "../../context/PopupContext";
import { useContext } from "react";
import AddNewTodoList from "../AddNewTodoList";

function SideBar({ handleSideBarClick }) {
  const modeLight = useSelector((state) => state.modeLight.value);

  const { setPopupContent } = useContext(PopupContext);

  const dispatch = useDispatch();

  const handelClickSearch = (e) => {
    dispatch(openSearchInput());
  };

  const handelClickRemoveAll = (e) => {
    handleSideBarClick();
    dispatch(removeAll());
  };

  const handleAddTodoList = () => {
    setPopupContent(<AddNewTodoList />);
  };

  return (
    <div className={styles.sideBarContainer} onClick={handleSideBarClick}>
      <div
        className={`${styles.innerSideBarContainer} ${
          modeLight ? styles.light : ""
        }`}
      >
        <div className={styles.sideBarLine} onClick={handleAddTodoList}>
          Add New Todo List
        </div>
        <div className={styles.sideBarLine} onClick={handelClickSearch}>
          Search Todo
        </div>
        <div
          className={styles.sideBarLine}
          onClick={(e) => handelClickRemoveAll(e)}
        >
          Remove All
        </div>
      </div>
    </div>
  );
}

export default SideBar;
