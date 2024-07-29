import React from 'react';
import styles from './OptionCard.module.css';
const OptionCard = ({title, icon, status, isSpecial}) => {

    const cardClass = isSpecial ? styles.specialOptionCard : styles.optionCard;
    const titleClass = isSpecial ? styles.specialOptionTitle : styles.optionTitle;
    const iconClass = isSpecial ? styles.specialOptionIcon : styles.optionIcon;
    const statusClass = isSpecial ? styles.specialOptionStatus : styles.optionStatus;


    const handleClick = () => {
        if (isSpecial && title === 'GET LOAN') {
        }
    };

    return (
        <div className={cardClass} onClick={handleClick} style={{cursor: isSpecial ? 'pointer' : 'default'}}>
            <h2 className={titleClass}>{title}</h2>
            <img loading="lazy" src={icon} alt="" className={iconClass}/>
            <h3 className={statusClass}>{status}</h3>
        </div>);
};

export default OptionCard;
