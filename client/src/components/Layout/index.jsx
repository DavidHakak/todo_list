import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchInput } from "../../features/searchInput";
import { searchList } from "../../features/todos";
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
