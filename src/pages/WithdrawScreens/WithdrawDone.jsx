import React from 'react'
import styles from './withdrawdone.module.css'
import loanIcon from "../../components/TellerATM/icons/teller.png";
import ReturnButton from '../../components/TellerATM/components/ReturnButton';
import WW3Token from "../../assets/ww3token.png"
import BDuckToken from "../../assets/bducktoken.png"
import WithdrawArrow from "../../assets/witdrawarrow.png"
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function WithdrawDone() {

    const navigate = useNavigate(); // Use useNavigate hook

    const tokens = [{
        icon: WW3Token,
        name: 'WW3',
        rate: '3,591'
    }, {
        icon: BDuckToken,
        name: 'BDUCK',
        rate: '46,946'
    }]

    return (
        <main className={styles.container}>
            <ReturnButton />
            <img
                loading="lazy"
                src={loanIcon}
                alt="Teller ATM Logo"
                className={styles.logo}
            />
            <div className={styles.contentWrapper}>
                <h1 className={styles.welcomeText}>THANK YOU FOR USING THE TELLER ATM</h1>
                <p className={styles.questionText}>WOULD YOU LIKE TO DO ANOTHER TRANSACTION? </p>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.returnButton} onClick={() => navigate('/')}>
                    <span className={styles.returnText}>RETURN TO GAME</span>
                </button>
                <button className={styles.returnButton} onClick={() => { }}>
                    <span className={styles.returnText}>NEW TRANSACTION</span>
                </button>
            </div>
        </main>);
}
