import React, {useState, useEffect, useContext} from 'react';
import styles from "./googleAuth.module.css"
import Authenticate from "../Function/authenticate";
import {useNavigate} from "react-router-dom";
import LoadingOverlay from "./LoadingOveraly";
import CustomAlert from "./CustomAlert";

const GoogleAuth = ({onLoginSuccess}) => {
    const [isWaiting, setIsWaiting] = useState(false);
    const [oauthPass, setOauthPass] = useState('');
    const [checkingCode, setCheckingCode] = useState(false);
    const [alertMessage, setAlertMessage] = useState(''); // State to manage the alert message


    const API_ENDPOINT = process.env.REACT_APP_GOOGLE_API_ENDPOINT;
    const REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI; // Replace with your redirect URI
    const clientID = process.env.REACT_APP_GOOGLE_CLIENTID;
    const clientSecret = process.env.REACT_APP_GOOGLE_CLIENTSECRET;
    const url = process.env.REACT_APP_GOOGLE_URL; // Replace with your server endpoint

    useEffect(() => {
        if (isWaiting && !checkingCode) {
            checkAuthCode();
        }
    }, [isWaiting, checkingCode]);

    const generateKey = () => {
        return Math.random().toString(36).substr(2, 10); // Simulate bl_DataBaseUtils.GenerateKey();
    };

    const requestOauth = () => {
        if (!clientID || !clientSecret) {
            console.warn("Google Client ID or Client Secret values haven't been assigned yet.");
            return;
        }
        const oauthPass = generateKey();
        setOauthPass(oauthPass);
        const redirect = encodeURIComponent(`${REDIRECT_URI}`);
        const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&client_id=${clientID}&redirect_uri=${redirect}&response_type=code&state=${oauthPass}`;
        setIsWaiting(true);
        window.open(url, '_blank');
    };

    const checkAuthCode = () => {
        setCheckingCode(true);

        fetch(url, {
            method: 'POST', headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, body: new URLSearchParams({
                type: 2, state: oauthPass
            })
        })
            .then(res => res.text())
            .then(text => {
                if (text.includes('success')) {
                    const data = text.split('|');
                    const code = data[2];
                    getAccessToken(code);
                    setIsWaiting(false);
                } else {
                    console.log("User has not been authenticated yet.");
                }
                setCheckingCode(false);
            })
            .catch(error => {
                console.error('Error checking auth code:', error);
                setCheckingCode(false);
            });
    };

    const getAccessToken = (code) => {

        fetch(API_ENDPOINT, {
            method: 'POST', headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, body: new URLSearchParams({
                code: code,
                client_id: clientID,
                client_secret: clientSecret,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code'
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    getUserCredentials(data.access_token);
                } else {
                    console.error('Failed to obtain access token.');
                }
            })
            .catch(error => {
                console.error('Error obtaining access token:', error);
            });
    };

    const CheckResponseCode = (response) => {

        switch (response.status) {
            case 401:
                setAlertMessage("Account not found, Please sign up from the game");
                break;
            case 200:
                onLoginSuccess();
                break;
            case 1000:
                setAlertMessage("Login Blocked! Close the game and try again in 3 minutes");
                break
            default:
                setAlertMessage("Something went wrong! Please try again");
                break;

        }
    }

    const closeAlert = () => {
        setAlertMessage(''); // Clear the alert message to close the alert
    };


    const GeneratePassword = (UniqueID) => {
        const charArray = UniqueID.split(''); // Convert string to array
        charArray.reverse(); // Reverse the array
        return charArray.join(''); // Convert array back to string
    };


    const getUserCredentials = (accessToken) => {
        const url = `https://www.googleapis.com/userinfo/v2/me?access_token=${accessToken}`;

        fetch(url, {
            method: 'GET', headers: {
                'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(async data => {
                const result = await Authenticate(data.id, GeneratePassword(data.id), "Google");
                CheckResponseCode(result);

            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
            });
    };

    return (<div>
        <button
            className={styles.loginBtnGoogle}
            onClick={requestOauth}
            disabled={isWaiting}>Login with Google
        </button>
        {isWaiting && <LoadingOverlay/>}
        {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert}/>} {/* Render the custom alert */}
    </div>);
};

export default GoogleAuth;
