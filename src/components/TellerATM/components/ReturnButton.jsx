import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from "./ReturnButton.module.css";
import left from "../icons/left-arrow.png";

const ReturnButton = ({to, btnName}) => {
    const navigate = useNavigate(); // Use useNavigate hook

    return (
        <div className={styles.returnButton} onClick={() => navigate(to)}>
            <img
                loading="lazy"
                src={left}
                alt="Left Arrow"
                className={styles.returnIcon}
            />
            <span className={styles.returnText}>{btnName}</span>
        </div>
    );
};

export default ReturnButton;
