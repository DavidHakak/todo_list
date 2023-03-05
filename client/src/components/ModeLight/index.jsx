import React, { useState } from "react";
import styles from "./style.module.css";
import { BsSun } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";

function ModeLight() {
  const [dark, setDark] = useState(true);

  const handleClick = () => {
    setDark(!dark);
  };

  return (
    <div className={styles.modeLight} onClick={handleClick}>
      {dark ? <BsSun fill="black" /> : <RxMoon />}
    </div>
  );
}

export default ModeLight;
