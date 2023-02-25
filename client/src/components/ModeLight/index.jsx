import React, { useState } from "react";
import styles from "./style.module.css";
import { BsSun } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";

function ModeLight() {
  const [dark, setDark] = useState(true);
  return (
    <div className={styles.modeLight}>
      {dark ? (
        <BsSun
          fill="black"
          onClick={() => {
            setDark(false);
          }}
        />
      ) : (
        <RxMoon
          onClick={() => {
            setDark(true);
          }}
        />
      )}
    </div>
  );
}

export default ModeLight;
