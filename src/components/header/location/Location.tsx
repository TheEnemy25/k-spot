import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Location.module.scss";

const Location = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.location}>
      <button type="button" onClick={toggleMenu}>
        <FaMapMarkerAlt id={styles.locationIcon} />
        <p>Forum</p>
      </button>
    </div>
  );
};

export default Location;
