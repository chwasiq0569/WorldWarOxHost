import React, {useState, useEffect, useContext} from 'react';
import "./GoogleAuth.css"
import Authenticate from "./Authenticate";
import {useNavigate} from "react-router-dom";
import {Set} from "../Function/Database";
import userStatus from "../Function/userStatus";

const GoogleAuth = ({ onLoginSuccess }) => {
    const [isWaiting, setIsWaiting] = useState(false);
    const [oauthPass, setOauthPass] = useState('');
    const [checkingCode, setCheckingCode] = useState(false);
    const navigate = useNavigate();


    const API_ENDPOINT = `https://oauth2.googleapis.com/token`;
    const REDIRECT_URI = 'https://www.worldwar0x.io/play/php/g-oauth.php'; // Replace with your redirect URI
    const clientID = "363712459833-7q0upmb6q1reicbq8qoe5n3mvag30mtk.apps.googleusercontent.com";
    const clientSecret = "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";
    const url = 'https://www.worldwar0x.io/play/php/bl_OAuth.php'; // Replace with your server endpoint

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
                window.alert("Account not found, Please sign up from the game");
                break;
            case 200:
                onLoginSuccess();
                break;
            default:
                window.alert("Something went wrong! Please try again");

        }
    }


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
            className="login-btn google"
            onClick={requestOauth}
            disabled={isWaiting}>Login with Google
        </button>
        {isWaiting && <p>Waiting for authentication...</p>}
        {/* {accountProfile && (<div>
            <h3>Welcome, {accountProfile.name}</h3>
            <p>Email: {accountProfile.email}</p>
            <img src={accountProfile.picture} alt="Profile"/>
        </div>)}*/}
    </div>);
};

export default GoogleAuth;
