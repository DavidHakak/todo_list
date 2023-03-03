import styles from "./style.module.css";
import { removeAll } from "../../features/todos";
import { openSearchInput } from "../../features/searchInput";
import { useDispatch, useSelector } from "react-redux";

function SideBar({ setIsSideBarOpen }) {
  const dispatch = useDispatch();

  const handelClickSearch = (e) => {
    dispatch(openSearchInput());
  };

  const handelClickRemoveAll = (e) => {
    //   e.stopPropagation();
    setIsSideBarOpen(false);
    dispatch(removeAll());
  };
  return (
    <div
      className={styles.sideBarContainer}
      onClick={(e) => {
        setIsSideBarOpen(false);
      }}
    >
      <div className={styles.innerSideBarContainer}>
        <div className={styles.sideBarLine}>Add New Todo</div>
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
