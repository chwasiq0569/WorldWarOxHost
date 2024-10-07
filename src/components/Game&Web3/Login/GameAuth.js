import React, { useState } from "react";
import styles from "./gameAuth.module.css";
import Authenticate from "../Function/authenticate";
import LoadingOverlay from "./LoadingOveraly";
import CustomAlert from "./CustomAlert";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const GameAuth = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const [loading, setLoading] = useState(false); // Loading state
    const [alertMessage, setAlertMessage] = useState(''); // State to manage the alert message
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading screen
        const { name, password } = formData;
        try {
            const result = await Authenticate(name, password, "ulogin");
            CheckResponseCode(result);
        } catch (error) {
            setAlertMessage("Something went wrong! Please try again");
        } finally {
            setLoading(false); // Hide loading screen
        }
    };

    const CheckResponseCode = (response) => {
        switch (response.status) {
            case 401:
             setAlertMessage("Username or password is incorrect");
                break;
            case 200:
                onLoginSuccess();
                break;
            default:
                setAlertMessage("Something went wrong! Please try again");
                break
        }
    };

    const closeAlert = () =>{
        setAlertMessage('');
    }
    return (
        <div>
            {loading && <LoadingOverlay />}
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Username..."
                    className={styles.inputField}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password..."
                        className={styles.passwordInput}
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEye/> : <FaEyeSlash/>}
                </span>
                </div>
                <button className={styles.loginBtn} type="submit" disabled={loading}>
                    LOG IN
                </button>
            </form>
            {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert}/>} {/* Render the custom alert */}
        </div>
    );
};

export default GameAuth;
