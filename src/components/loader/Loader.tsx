import React from "react";
import "./Loader.module.scss";
import videoSrc from "../../assets/gifs/dd.gif";

const Loader = () => {
  return (
    <div className="loader-container">
      <video autoPlay loop muted className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
