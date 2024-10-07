import React from "react";
import styles from "./gameLogin.css";

const GameLogin = () => {
    return (
        <button className={styles.loginButton}>
            <span className={styles.loginButtonText}>LOGIN</span>
        </button>
    );
};

export default GameLogin;
