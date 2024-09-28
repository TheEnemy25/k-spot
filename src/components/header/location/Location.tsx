"use client"; // Додаємо це на початок файлу

import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Location.module.scss";

const Location = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="location">
      <button type="button" onClick={toggleMenu}>
        <FaMapMarkerAlt />
        <p>Forum</p>
      </button>
    </div>
  );
};

export default Location;
