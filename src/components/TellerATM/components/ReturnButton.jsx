import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from "./ReturnButton.module.css";
import left from "../icons/left-arrow.png";

const ReturnButton = () => {
    const navigate = useNavigate(); // Use useNavigate hook

    return (
        <button className={styles.returnButton} onClick={() => navigate('/')}>
            <img
                loading="lazy"
                src={left}
                alt="Left Arrow"
                className={styles.returnIcon}
            />
            <span className={styles.returnText}>RETURN TO GAME</span>
        </button>
    );
};

export default ReturnButton;
