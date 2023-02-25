import React from "react";
import styles from "./style.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
function HamburgerMenu() {
  return (
    <div className={styles.hamburgerMenu}>
      <RxHamburgerMenu className={styles.hamburgerMenu} />
    </div>
  );
}

export default HamburgerMenu;
