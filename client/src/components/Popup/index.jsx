import { useContext } from "react";
import popupContext from "../../context/PopupContext";
import styles from "./style.module.css";

function Popup({ children }) {
  const setPopupContent = useContext(popupContext);
  const handleClosePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className={styles.popupContainer} onClick={handleClosePopup}>
      {children}
    </div>
  );
}

export default Popup;
