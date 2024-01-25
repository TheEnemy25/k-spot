import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import SearchBar from "./search-bar/SearchBar";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import Location from "./location/Location";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoNavLinks}>
        <Link to="">
          <img src={logo} className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/cinema-theaters">Cinema Theaters</Link>
            </li>
          </ul>
        </nav>
      </div>

      <SearchBar />

      <div className={styles.authSection}>
        <Link to="">
          <Location />
        </Link>
        <Link to="">
          <Login />
        </Link>
        <p>│</p>
        <Link to="">
          <Registration />
        </Link>
        <Link to="">
          <ShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Header;
