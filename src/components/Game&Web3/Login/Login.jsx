import React, {useState, useEffect} from "react";
import style from "./login.module.css";
import DiscordAuth from "./DiscordAuth";
import GoogleAuth from "./GoogleAuth";
import GameAuth from "./GameAuth";
import ReturnButton from "../TellerATM/components/ReturnButton";
import {Get, Delete} from '../Function/database';
import PlayerInfo from "./PlayerInfo";
import {updateUserStatus} from "../Function/api";
import LoadingOverlay from "./LoadingOveraly";

function Login() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state


    useEffect(() => {
        // Get the user data when the component mounts
        setUser(Get());
    }, []);

    const handleLogout = async () => {
        setLoading(true)
        await updateUserStatus({name: user.name, status: "0", type: "2"});
        Delete(); // Clear user data from sessionStorage
        setUser(null); // Set user to null to trigger re-render
        setLoading(false)
    };

    const handleLoginSuccess = () => {
        setUser(Get()); // Update user state after successful login
    };


    return (<div className={style.container}>
        {loading && <LoadingOverlay />}
        <ReturnButton to='/atm' btnName='RETURN TO ATM' value={{
            replace: true
        }}/>
        <div className={style.loginContainer}>
            <h1 className={style.gameTitle}>World War 0X</h1>

            {user ? (<div>
                <div className={style.loggedInMessage}>
                    Logged in as {user.nick}
                </div>
                <button className={style.logoutBtn} onClick={handleLogout}>
                    Logout
                </button>
                <div>
                    <div className={style.loggedInReminder}>IMPORTANT!</div>
                    <div className={style.loggedInReminderText}>Please log out before logging in to the game.</div>
                </div>
                <PlayerInfo player={user} />
            </div>) : (<div>
                <GoogleAuth onLoginSuccess={handleLoginSuccess}/>
                <DiscordAuth onLoginSuccess={handleLoginSuccess}/>
                <div className={style.separator}>
                    <span>OR</span>
                </div>
                <GameAuth onLoginSuccess={handleLoginSuccess}/>
            </div>)}
        </div>
    </div>);
}

export default Login;
