import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Location.module.scss";
import LocationMenu from "./LocationMenu";

const Location = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.location}>
      <a href="#" onClick={toggleMenu}>
        <FaMapMarkerAlt id={styles.locationIcon} />
        <p>Forum</p>
      </a>
      {menuOpen && <LocationMenu />}
    </div>
  );
};

export default Location;
