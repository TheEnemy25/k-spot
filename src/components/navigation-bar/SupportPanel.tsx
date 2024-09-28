"use client"

import React, { useState } from "react";
import "./SupportPanel.module.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaHeadset,
} from "react-icons/fa";

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
      className={`${"support-panel"} ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={"icons"}>
        {iconsData.map((data, index) => (
          <a
            key={index}
            href={`https://www.${data.title.toLowerCase()}.com`}
            onMouseEnter={handleMouseEnter}
          >
            {data.icon}
            <p>{isHovered ? data.title : ""}</p>
          </a>
        ))}
      </div>
      {isHovered && <div className=""></div>}
    </nav>
  );
};

export default SupportPanel;
