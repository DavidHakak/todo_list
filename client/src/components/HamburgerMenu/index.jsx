import React from "react";
import styles from "./style.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerMenu({ handleSideBarClick }) {
  return (
    <div className={styles.hamburgerMenu}>
      <RxHamburgerMenu
        className={styles.hamburgerMenu}
        onClick={handleSideBarClick}
      />
    </div>
  );
}

export default HamburgerMenu;
