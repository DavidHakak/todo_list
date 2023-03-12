import React, { useState } from "react";
import styles from "./style.module.css";
import { BsSun } from "react-icons/bs";
import { RxMoon } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toggleModeLite } from "../../features/modeLight";

function ModeLight() {
  const modeLight = useSelector((state) => state.modeLight.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModeLite());
  };

  return (
    <div className={styles.modeLight} onClick={handleClick}>
      {modeLight ? <BsSun fill="black" /> : <RxMoon />}
    </div>
  );
}

export default ModeLight;
