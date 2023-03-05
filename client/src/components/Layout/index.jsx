import React from "react";
import Header from "../Header";
import Main from "../Main/index";
import SearchInput from "../SearchInput";
import styles from "./style.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <SearchInput />
      <Main />
    </div>
  );
}

export default Layout;
