import React, { useState } from "react";
import styles from "./SupportPanel.module.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SupportPanel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconsData = [
    { icon: <FaHeadset />, title: "Support Online" },
    { icon: <FaFacebook />, title: "Support Facebook" },
    { icon: <FaInstagram />, title: "Support Instagram" },
    { icon: <FaTelegram />, title: "Support Telegram" },
    { icon: <FaTwitter />, title: "Support Twitter" },
  ];

  return (
    <nav
      className={`${styles.supportPanel} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.icons}>
        {iconsData.map((data, index) => (
          <Link
            key={index}
            to={`https://www.${data.title.toLowerCase()}.com`}
            onMouseEnter={handleMouseEnter}
          >
            {data.icon}
            <p>{isHovered ? data.title : ""}</p>
          </Link>
        ))}
      </div>
      {isHovered && <div className={styles.hoveredText}></div>}
    </nav>
  );
};

export default SupportPanel;
