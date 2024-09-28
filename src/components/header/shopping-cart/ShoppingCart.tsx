"use client";

import React, { useState } from "react";
import "./ShoppingCart.module.scss";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SupportPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`supportPanel ${isOpen ? "open" : ""}`}>
      <button onClick={togglePanel}>Support</button>
      <div className="socialMediaIcons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>
    </div>
  );
};

export default SupportPanel;
