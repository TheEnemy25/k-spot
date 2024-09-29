"use client";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(null);
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
      className={`support-panel ${isHovered ? "support-panel--hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="support-panel__icons">
        {iconsData.map((data, index) => (
          <a
            key={index}
            href="/"
            className="support-panel__icon"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {data.icon}
            {hoveredIndex === index && (
              <span className="support-panel__tooltip">{data.title}</span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SupportPanel;
