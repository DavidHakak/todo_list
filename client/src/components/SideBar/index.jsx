import styles from "./style.module.css";

function SideBar({ setIsSideBarOpen }) {
  const handelClick = (e) => {
    e.stopPropagation();
    //setIsSideBarOpen(false);
  };
  return (
    <div
      className={styles.sideBarContainer}
      onClick={(e) => {
        setIsSideBarOpen(false);
      }}
    >
      <div className={styles.innerSideBarContainer}>
        <div className={styles.sideBarLine}>Search Todo</div>
        <div
          className={styles.sideBarLine}
          onClick={(e) => {
            handelClick(e);
          }}
        >
          Add New{" "}
        </div>
        <div className={styles.sideBarLine}>Remove All</div>
        <div className={styles.sideBarLine}>Add </div>
        <div className={styles.sideBarLine}>Add New Todo</div>
      </div>
    </div>
  );
}

export default SideBar;
