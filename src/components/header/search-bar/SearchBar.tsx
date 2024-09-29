import { FaSearch } from "react-icons/fa";
import "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Search ..." />
    </div>
  );
};

export default SearchBar;
