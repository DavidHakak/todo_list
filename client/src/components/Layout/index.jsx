import React from "react";
import { useSelector } from "react-redux";
import Header from "../Header";
import Main from "../Main/index";
import SearchInput from "../SearchInput";
import styles from "./style.module.css";

function Layout() {
  const modeLight = useSelector((state) => state.modeLight.value);

  return (
    <div className={`${styles.layout} ${modeLight ? styles.light : ""}`}>
      <Header />
      <SearchInput />
      <Main />
    </div>
  );
}

export default Layout;
