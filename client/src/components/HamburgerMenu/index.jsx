import React from "react";
import styles from "./style.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
function HamburgerMenu({ isSideBarOpen, setIsSideBarOpen }) {
  return (
    <div className={styles.hamburgerMenu}>
      <RxHamburgerMenu
        className={styles.hamburgerMenu}
        onClick={() => {
          setIsSideBarOpen(!isSideBarOpen);
        }}
      />
    </div>
  );
}

export default HamburgerMenu;
