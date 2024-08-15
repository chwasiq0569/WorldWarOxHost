import React from 'react'
import styles from './choosetoken.module.css'
import loanIcon from "../../components/TellerATM/icons/teller.png";
import ReturnButton from '../../components/TellerATM/components/ReturnButton';
import WW3Token from "../../assets/ww3token.png"
import BDuckToken from "../../assets/bducktoken.png"
import WithdrawArrow from "../../assets/witdrawarrow.png"
import { Link } from 'react-router-dom';

export default function ChooseToken({ withdrawToken,
    setWithdrawToken }) {

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
                <h1 className={styles.welcomeText}>WITHDRAW</h1>
                <p className={styles.questionText}>CHOOSE WHICH TOKEN TO WITHDRAW</p>
            </div>
            <div className={styles.tokens}>
                {
                    tokens.map(token => (
                        <Link key={token.id} to='/withdrawamount'>
                            <div className={styles.individualToken} onClick={() => setWithdrawToken(token)} >
                                <img className={styles.tokenImg} src={token.icon} alt="token" />
                                <div className={styles.tokenDetails}>
                                    <p className={styles.name}>{token.name}</p>
                                    <p className={styles.price}>{token.rate}</p>
                                </div>
                                <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" />
                            </div></Link>
                    ))
                }

            </div>
        </main>);
}
