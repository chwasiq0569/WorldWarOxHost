import React from 'react'
import styles from "./withdrawamount.module.css"
import ReturnButton from '../../components/TellerATM/components/ReturnButton';
import WithdrawArrow from "../../assets/witdrawarrow.png"
import WW3Token from "../../assets/ww3token.png"
import loanIcon from "../../components/TellerATM/icons/teller.png";
import { Link, useNavigate } from 'react-router-dom';

export default function WithdrawAmount({ withdrawToken }) {
    const navigate = useNavigate(); // Use useNavigate hook

    console.log('withdrawToken', withdrawToken)
    const tokens = [{
        icon: WW3Token,
        name: 'WW3',
        rate: '3,591'
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
                <h1 className={styles.welcomeText}>WITHDRAW</h1>
                <p className={styles.questionText}>CHOOSE THE AMOUNT OF BDUCK TO WITHDRAW</p>
                <p className={styles.secondaryText}>DAILY WITHDRAWAL LIMIT
                    <span> 100,000 BDUCK</span></p>
            </div>

            <div className={styles.amounts}>
                <Link to="/customamount">
                    <div className={styles.leftSection}>
                        ANOTHER AMOUNT
                    </div>
                </Link>
                <div className={styles.centerSection}>
                    <div onClick={() => navigate('/withdrawprocessing')} className={styles.amount}>1K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" /></div>
                    <div onClick={() => navigate('/withdrawprocessing')} className={styles.amount}>5K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" /></div>
                </div>
                <div className={styles.rightSection}>
                    <div onClick={() => navigate('/withdrawprocessing')} className={styles.amount}>2K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" /></div>
                    <div onClick={() => navigate('/withdrawprocessing')} className={styles.amount}>10K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" /></div>

                </div>
            </div>

            <div className={styles.tokens}>
                <><span>BALANCE</span> {
                    tokens.map(token => (
                        <div className={styles.individualToken}>
                            <img className={styles.tokenImg} src={withdrawToken.icon} alt="token" />
                            <div className={styles.tokenDetails}>
                                <p className={styles.name}>{withdrawToken.name}</p>
                                <p className={styles.price}>{withdrawToken.rate}</p>
                            </div>
                            <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" />
                        </div>
                    ))
                }</>
            </div>
        </main>
    )
}
