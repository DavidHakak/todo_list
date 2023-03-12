import React, { useState } from "react";
import styles from "./style.module.css";
import SideBar from "../SideBar";
import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerMenu() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBarClick = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <RxHamburgerMenu
        className={styles.hamburgerMenu}
        onClick={handleSideBarClick}
      />
      {isSideBarOpen && <SideBar handleSideBarClick={handleSideBarClick} />}
    </div>
  );
}

export default HamburgerMenu;
