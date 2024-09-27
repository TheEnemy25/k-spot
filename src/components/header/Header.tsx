import Logo from "../../assets/images/logo.png";
import SearchBar from "./search-bar/SearchBar";
import ShoppingCart from "./shopping-cart/ShoppingCart";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import Location from "./location/Location";
import Image from 'next/image';
import "./Header.module.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logoNavLinks">
        <a href="/">
          <Image src={Logo} alt="Logo" className="logo" />
        </a>
        <nav>
          <ul className="navLinks">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movie-pages/movies-list/MoviesPage">Movies</a>
            </li>
            <li>
              <a href="/cinema-theater-page/CinemaTheater">Cinema Theaters</a>
            </li>
          </ul>
        </nav>
      </div>

      <SearchBar />

      <div className="authSection">
        <a href="">
          <Location />
        </a>
        <a href="">
          <Login />
        </a>
        <p>│</p>
        <a href="">
          <Registration />
        </a>
        <a href="">
          <ShoppingCart />
        </a>
      </div>
    </header>
  );
};

export default Header;
