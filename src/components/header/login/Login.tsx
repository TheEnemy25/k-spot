import React from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.login}>
      <Link to="#" onClick={() => alert("Увійти")}>
        Sign in
      </Link>
    </div>
  );
};

export default Login;
