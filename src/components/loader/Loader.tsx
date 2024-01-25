import React from "react";
import styles from "./Loader.module.scss";
import videoSrc from "../../assets/gifs/dd.gif";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <video autoPlay loop muted className={styles.video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
