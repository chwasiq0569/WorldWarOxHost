import React, { useState, useEffect } from "react";
import "./Login.css";
import DiscordAuth from "./DiscordAuth";
import GoogleAuth from "./GoogleAuth";
import GameAuth from "./GameAuth";
import ReturnButton from "../../TellerATM/components/ReturnButton";
import { Get, Delete } from '../Function/Database';
import userStatus from "../Function/userStatus";

function Login() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get the user data when the component mounts
        setUser(Get());
    }, []);

    const handleLogout = async () => {
        await userStatus({name: user.nick, status: "0", type: "2"});
        Delete(); // Clear user data from sessionStorage
        setUser(null); // Set user to null to trigger re-render
    };

    const handleLoginSuccess = () => {
        setUser(Get()); // Update user state after successful login
    };


    return (
        <div className="login-body">
            <div className="return-button-container">
                <ReturnButton to='/atm' btnName='RETURN TO ATM' />
            </div>

            <div className="login-container">
                <h1 className="game-title">World War 0X</h1>

                {user ? (
                    <div>
                        <div className="logged-in-message">
                            Logged in as {user.nick}
                        </div>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="login-buttons">
                        <GoogleAuth onLoginSuccess={handleLoginSuccess} />
                        <DiscordAuth onLoginSuccess={handleLoginSuccess} />
                        <div className="separator">
                            <span>OR</span>
                        </div>
                        <GameAuth onLoginSuccess={handleLoginSuccess} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
