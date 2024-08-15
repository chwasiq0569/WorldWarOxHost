import React from 'react';
import styles from './OptionCard.module.css';
import {useNavigate} from "react-router-dom";

const OptionCard = ({title, icon, status, isSpecial}) => {

    const cardClass = isSpecial ? styles.specialOptionCard : styles.optionCard;
    const titleClass = isSpecial ? styles.specialOptionTitle : styles.optionTitle;
    const iconClass = isSpecial ? styles.specialOptionIcon : styles.optionIcon;
    const statusClass = isSpecial ? styles.specialOptionStatus : styles.optionStatus;

    const navigator = useNavigate();


    const handleClick = () => {
        if (isSpecial && title === 'WITHDRAW') {
            navigator('/withdraw');
        } else if (isSpecial && title === 'DEPOSIT') {
            navigator('/deposit');
        }
        if (isSpecial && title === 'AMMO') {
            window.alert("Please use in-game ATM for ammo refill")
        } else if (isSpecial && title === 'HEALTH') {
            window.alert("Please use in-game ATM for ammo refill")
        }
    };

    return (<div className={cardClass} onClick={handleClick} style={{cursor: isSpecial ? 'pointer' : 'default'}}>
        <h2 className={titleClass}>{title}</h2>
        <img loading="lazy" src={icon} alt="" className={iconClass}/>
        <h3 className={statusClass}>{status}</h3>
    </div>);
};

export default OptionCard;
