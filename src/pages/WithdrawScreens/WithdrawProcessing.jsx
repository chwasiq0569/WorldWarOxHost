import React from 'react'
import styles from './withdrawprocessing.module.css'
import loanIcon from "../../components/TellerATM/icons/teller.png";
import ReturnButton from '../../components/TellerATM/components/ReturnButton';
import WW3Token from "../../assets/ww3token.png"
import BDuckToken from "../../assets/bducktoken.png"
import WithdrawArrow from "../../assets/witdrawarrow.png"

export default function WithdrawProcessing() {

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
                <h1 className={styles.welcomeText}>WITHDRAWING <span>5,436</span> BDUCK</h1>
                <p className={styles.questionText}>PLEASE WAIT WHILE YOUR TRANSACTION IS PROCESSING</p>
            </div>
            <div className={styles.loader}>
                <img
                    loading="lazy"
                    src={loanIcon}
                    alt="Teller ATM Logo"
                    className={styles.logo}
                />
            </div>
        </main>);
}
