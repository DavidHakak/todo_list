import styles from "./style.module.css";
import ModeLight from "../ModeLight";
import HamburgerMenu from "../HamburgerMenu";
import { useSelector } from "react-redux";

function Header() {
  const modeLight = useSelector((state) => state.modeLight.value);
  return (
    <header className={`${styles.header} ${modeLight ? styles.light : ""}`}>
      <ModeLight />
      <h2>Todo List App</h2>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
