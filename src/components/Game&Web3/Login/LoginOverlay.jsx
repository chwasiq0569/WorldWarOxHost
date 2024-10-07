import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './loginOverlay.module.css'; // Assuming you create a separate CSS file for this component

const LoginOverlay = ({ user }) => {
    const navigate = useNavigate();

    if (user !== null) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.overlayContent}>
                <div className={styles.overlayText}>
                    <span>PLEASE LOGIN WITH YOUR GAME ACCOUNT TO USE ATM</span>
                </div>
                <button className={styles.overlayLoginButton} onClick={() => navigate('/login', {
                    replace:true
                })}>
                    LOGIN
                </button>
                <div>
                    <button className={styles.overlayBackButton} onClick={() => navigate('/',{
                        replace:true
                    })}>
                        BACK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginOverlay;
