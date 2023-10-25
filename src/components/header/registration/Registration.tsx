import React from "react";
import styles from "./Registration.module.scss";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className={styles.registration}>
      <Link to="#" onClick={() => alert("Зареєструватися")}>
        Sign up
      </Link>
    </div>
  );
};

export default Registration;
