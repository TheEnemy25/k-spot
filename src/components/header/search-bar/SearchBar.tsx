import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.inputWrapper}>
      <FaSearch id={styles.searchIcon} />
      <input placeholder="Search ..." />
    </div>
  );
};

export default SearchBar;
