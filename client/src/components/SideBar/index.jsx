import styles from "./style.module.css";
import { removeAll } from "../../features/todos";
import { openSearchInput } from "../../features/searchInput";
import { useDispatch } from "react-redux";

function SideBar({ handleSideBarClick }) {
  const dispatch = useDispatch();

  const handelClickSearch = (e) => {
    dispatch(openSearchInput());
  };

  const handelClickRemoveAll = (e) => {
    handleSideBarClick();
    dispatch(removeAll());
  };

  return (
    <div className={styles.sideBarContainer} onClick={handleSideBarClick}>
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
