import React, { useState } from "react";
import styles from "./style.module.css";
import ModeLight from "../ModeLight";
import HamburgerMenu from "../HamburgerMenu";

function Header() {
  return (
    <header className={styles.header}>
      <ModeLight />
      <h2>Todo List App</h2>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
