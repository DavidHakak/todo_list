import styles from "./style.module.css";
import { closeSearchInput } from "../../features/searchInput";
import { useDispatch, useSelector } from "react-redux";
import { searchList, returnAllListToStateValue } from "../../features/todos";
import { AiOutlineClose } from "react-icons/ai";

function SearchInput() {
  const openInput = useSelector((state) => state.searchInput.value);

  const dispatch = useDispatch();

  const handleInputSearch = (e) => {
    dispatch(searchList({ value: e.target.value }));
  };

  const handleFinishSearch = () => {
    dispatch(closeSearchInput());
    dispatch(returnAllListToStateValue());
  };

  return (
    <div>
      {openInput && (
        <div className={styles.searchInputContainer}>
          <div className={styles.innerInputDiv}>
            <input
              type="search"
              placeholder="Which list you looking for ?"
              onChange={(e) => handleInputSearch(e)}
            />
            <AiOutlineClose
              className={styles.icon}
              onClick={handleFinishSearch}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default SearchInput;
