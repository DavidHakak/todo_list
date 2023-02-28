import React, { useState } from "react";
import styles from "./style.module.css";
import ModeLight from "../ModeLight";
import HamburgerMenu from "../HamburgerMenu";
import SideBar from "../SideBar";

function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <header className={styles.header}>
      <ModeLight />
      <h2>Todo List App</h2>
      <HamburgerMenu
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      {isSideBarOpen && <SideBar setIsSideBarOpen={setIsSideBarOpen} />}
    </header>
  );
}

export default Header;
