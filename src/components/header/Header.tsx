"use client";

import Logo from "../../../public/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import "./Header.module.scss";

const Header = () => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <header className="header">
      <div className="header__logo-nav">
        <Link href="/" passHref>
          <Image src={Logo} alt="Logo" className="header__logo" />
        </Link>
        <nav className="header__nav">
          <ul className="nav__list">
            <li>
              <Link href="/movie/movies-list" className="nav__link">Movies</Link>
            </li>
            <li>
              <Link href="/cinema-theater/CinemaTheater" className="nav__link">Cinema Theaters</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__auth">
        <Link href="">
          <div className="auth__location">Your Location</div>
        </Link>
        <Link href="">
          <div className="auth__login">Login</div>
        </Link>
        <p className="auth__separator">│</p>
        <Link href="">
          <div className="auth__registration">Sign up</div>
        </Link>
        <Link href="">
          <div className="auth__cart">
            <FaShoppingCart className="cart__icon" />
            <span className="cart__count">{itemCount}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;


{/* <SearchBar /> */ }
// import SearchBar from "./search-bar/SearchBar";
