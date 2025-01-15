import React, {useEffect, useState} from 'react';
import styles from "./discordAuth.module.css"
import Authenticate from "../Function/authenticate";
import {useLocation, useNavigate} from "react-router-dom";
import {Set} from "../Function/database";
import LoadingOverlay from "./LoadingOveraly";
import CustomAlert from "./CustomAlert";


const DiscordAuth = ({onLoginSuccess}) => {
    const [isWaiting, setIsWaiting] = useState(false);
    const [oauthPass, setOauthPass] = useState('');
    const [checkingCode, setCheckingCode] = useState(false);
    const [alertMessage, setAlertMessage] = useState(''); // State to manage the alert message


    const API_ENDPOINT = process.env.REACT_APP_DISCORD_API_ENDPOINT;
    const REDIRECT_URI = process.env.REACT_APP_DISCORD_REDIRECT_URI; // Replace with your redirect URI
    const clientID = process.env.REACT_APP_DISCORD_CLIENTID;
    const clientSecret = process.env.REACT_APP_DISCORD_CLIENTSECRET;
    const url = process.env.REACT_APP_DISCORD_URL; // Replace with your server endpoint

    useEffect(() => {
        window.addEventListener('focus', onApplicationFocus);
        return () => {
            window.removeEventListener('focus', onApplicationFocus);
        };
    }, [isWaiting, checkingCode]);

    const onApplicationFocus = () => {
        if (isWaiting && !checkingCode) {
            checkAuthCode();
        }
    };

    const generateKey = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const requestOauth = () => {
        if (!clientID || !clientSecret) {
            console.warn("Discord Client ID or Client Secret values haven't been assigned yet.");
            return;
        }
        const newOauthPass = generateKey();
        setOauthPass(newOauthPass);

        const prompt = 'none';
        const url = `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${clientID}&scope=identify%20email&state=${newOauthPass}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&prompt=${prompt}`;

        setIsWaiting(true);
        window.open(url, '_blank');
    };

    const checkAuthCode = () => {
        setCheckingCode(true);
        const formData = new FormData();
        formData.append('type', '3');
        formData.append('state', oauthPass);
        formData.append('dbname', 'discordSessions');

        fetch(url, {
            method: 'POST', body: formData,
        })
            .then(response => response.text())
            .then(text => {
                if (text.includes('success')) {
                    const data = text.split('|');
                    const newAccessCode = data[2];
                    getAccessToken(newAccessCode);
                    setIsWaiting(false);
                } else {
                    console.error('User not authenticated yet.');
                }
                setCheckingCode(false);
            })
            .catch(error => {
                console.error('Error checking auth code:', error);
                setCheckingCode(false);
            });
    };

    const getAccessToken = (code) => {
        const url = `${API_ENDPOINT}/oauth2/token`;

        const formData = new URLSearchParams();
        formData.append('code', code);
        formData.append('client_id', clientID);
        formData.append('client_secret', clientSecret);
        formData.append('redirect_uri', REDIRECT_URI);
        formData.append('grant_type', 'authorization_code');

        fetch(url, {
            method: 'POST', body: formData.toString(), // Convert formData to a URL-encoded string
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`Error ${response.status}: ${text}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                if (data && data.access_token && data.token_type) {
                    getUserCredentials(data.access_token, data.token_type);
                } else {
                    console.error('Error obtaining access token:', data);
                }
            })
            .catch(error => {
                console.error('Error obtaining access token:', error);
            });
    };

    const GeneratePassword = (UniqueID) => {
        const charArray = UniqueID.split(''); // Convert string to array
        charArray.reverse(); // Reverse the array
        return charArray.join(''); // Convert array back to string
    };

    const getUserCredentials = (accessToken, tokenType) => {
        const url = `${API_ENDPOINT}/users/@me`;

        fetch(url, {
            method: 'GET', headers: {
                'Authorization': `${tokenType} ${accessToken}`, 'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(async data => {
                const result = await Authenticate(data.id, GeneratePassword(data.id), "Discord");
                CheckResponseCode(result)

            })
            .catch(error => {
                console.error('Error obtaining user credentials:', error);
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
            default:
                setAlertMessage("Something went wrong! Contact developer");
                break
        }
    }

    const closeAlert = () => {
        setAlertMessage(''); // Clear the alert message to close the alert
    };

    return (<div>
        <button className={styles.loginBtnDiscord} onClick={requestOauth} disabled={isWaiting}>Login with Discord
        </button>
        {isWaiting && <LoadingOverlay/>}
        {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert}/>} {/* Render the custom alert */}
    </div>);
};

export default DiscordAuth;
