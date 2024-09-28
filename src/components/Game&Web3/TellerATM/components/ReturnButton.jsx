import React from "react";
import {useNavigate} from 'react-router-dom'; // Import useNavigate
import styles from "./returnButton.module.css";
import left from "../icons/left-arrow.png";

const ReturnButton = ({to, btnName, value}) => {
    const navigate = useNavigate(); // Use useNavigate hook

    return (
        <div className={styles.returnButton} onClick={() => navigate(to, value)}>
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
