import { useContext, useEffect } from "react";
import popupContext from "../../context/PopupContext";
import styles from "./style.module.css";

function Popup() {
  const { setPopupContent, popupContent } = useContext(popupContext);

  const handleClosePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className={styles.popupContainer} onClick={handleClosePopup}>
      {popupContent}
    </div>
  );
}

export default Popup;
