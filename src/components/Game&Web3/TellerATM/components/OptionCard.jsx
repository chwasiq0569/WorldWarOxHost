import React from 'react';
import styles from './optionCard.module.css';
import {useNavigate} from 'react-router-dom';
import {getUserTimestamp} from "../../Function/api";
import {Get} from "../../Function/database";
import {isLoginBlocked} from "../../Function/IsLoginBlocked"; // Import useNavigate

const OptionCard = ({title, icon, status, isSpecial, id}) => {
    const navigate = useNavigate(); // Use useNavigate hook

    const cardClass = isSpecial ? styles.specialOptionCard : styles.optionCard;
    const titleClass = isSpecial ? styles.specialOptionTitle : styles.optionTitle;
    const iconClass = isSpecial ? styles.specialOptionIcon : styles.optionIcon;
    const statusClass = isSpecial ? styles.specialOptionStatus : styles.optionStatus;

    const user = Get();


    const handleClick = async () => {
        if (isSpecial && title === 'HEALTH') {
            window.alert("Please use in game ATM for Health pack")
        } else if (isSpecial && title === 'AMMO') {
            window.alert("Please use in game ATM for Ammo pack")
        } else if (isSpecial && id === 0 && title === 'WITHDRAW') {

            const result = await getUserTimestamp({name: user.name, type: "1"});

            if (isLoginBlocked(result)){
                window.alert("Login Blocked! Close the game and try again in 3 minutes");
                return;
            }

            navigate('/choosetoken', {
                replace: true,
                state: {
                    isWithdraw: true
                }
            });
        } else if (isSpecial && id === 1 && title === 'DEPOSIT') {

            const result = await getUserTimestamp({name: user.name, type: "1"});

            if (isLoginBlocked(result)){
                window.alert("Login Blocked! Close the game and try again in 3 minutes");
                return;
            }

            navigate('/choosetoken', {
                replace: true,
                state: {
                    isWithdraw: false
                }
            });
        }
    };

    return (<div className={cardClass} onClick={handleClick} style={{cursor: isSpecial ? 'pointer' : 'not-allowed'}}>
        <h2 className={titleClass}>{title}</h2>
        <img loading="lazy" src={icon} alt="" className={iconClass}/>
        <h3 className={statusClass}>{status}</h3>
    </div>);
};

export default OptionCard;