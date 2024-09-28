import React from 'react';
import styles from './customAlert.module.css';
import logo from "../../../assets/warning.png";

const CustomAlert = ({
                         message,
                         onClose,
                         onConfirm,
                         confirmText = "Yes",
                         cancelText = "No",
                         confirmColor = "green",
                         cancelColor = "red",
                         singleButton = true // Add this prop to control single vs. double button mode
                     }) => {
    return (
        <div className={styles.alertOverlay}>
            <div className={styles.alertBox}>
                <img
                    style={{
                        width: '50px',
                        height: '50px',
                        marginBottom : '15px'
                    }}
                    src={logo}
                    alt="Alert Logo"
                />
                <p>{message}</p>
                <div className={styles.buttonContainer}>
                    {singleButton ? (
                        <button
                            style={{
                                width: "100%",
                                backgroundColor: confirmColor
                            }}
                            onClick={onClose}
                        >
                            OK
                        </button>
                    ) : (
                        <>
                            <button
                                style={{
                                    width: "45%",
                                    backgroundColor: cancelColor,
                                }}
                                onClick={onClose}
                            >
                                {cancelText}
                            </button>
                            <button
                                style={{
                                    width: "45%",
                                    backgroundColor: confirmColor,
                                    marginLeft: "10%" // Gap between buttons
                                }}
                                onClick={onConfirm}
                            >
                                {confirmText}
                            </button>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
