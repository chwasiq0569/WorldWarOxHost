import React from 'react';
import styles from './loadingOveraly.module.css'; // Assuming you create a separate CSS file for this component
import logo from '../../../assets/herologo.webp';

const LoadingOverlay = () => {
    return (
        <div className={styles.overlay}>
            <img src={logo} alt="Loading Logo" className={styles.logo} />
        </div>
    );
};

export default LoadingOverlay;
