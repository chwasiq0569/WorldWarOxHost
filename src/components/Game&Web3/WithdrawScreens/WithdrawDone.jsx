import React, {useEffect, useState} from 'react';
import styles from './withdrawdone.module.css';
import loanIcon from "../TellerATM/icons/teller.png";
import ReturnButton from '../TellerATM/components/ReturnButton';
import WW3Token from "../../../assets/ww3token.png";
import BDuckToken from "../../../assets/bducktoken.png";
import WithdrawArrow from "../../../assets/witdrawarrow.png";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import LoginOverlay from "../Login/LoginOverlay";
import {Get} from "../Function/database";

export default function WithdrawDone() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;

    const {success, isBDUCK, amount, signature, isWithdraw} = state;

    const user = Get();

    const [isNavigating, setIsNavigating] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(signature);
        alert('Copied to clipboard!');
    };

    useEffect(() => {
        const handlePopState = (event) => {
            navigate('/atm', {replace: true});
        };

        const handleBeforeUnload = (event) => {
            if (!isNavigating) {
                const message = 'Are you sure you want to leave this page?';
                event.returnValue = message; // For older browsers
                return message;
            }
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [navigate, location.pathname, isNavigating]);

    return (<main className={styles.container}>
        <img
            loading="lazy"
            src={loanIcon}
            alt="Teller ATM Logo"
            className={styles.logo}
        />
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>THANK YOU FOR USING THE TELLER ATM</h1>
            <p className={styles.signatureText}>
                {success ? `SUCCESS! ${amount} ${isBDUCK ? "" +
                    "$BDUCK" : "$WW3"} WAS
                    SUCCESSFULLY ${isWithdraw ? "WITHDRAWN" : "DEPOSITED"} TO
                    USER ${user.nick.toString().toUpperCase()}` : `TRANSACTION COMPLETED, BUT DEPOSIT WAS UNSUCCESSFUL. PLEASE COPY YOUR SIGNATURE AND REACH OUT TO OUR SUPPORT TEAM.`}
            </p>
            <p className={styles.copyText}
               onClick={handleCopyToClipboard}>{signature}</p>
            <div className={styles.buttonsContainer}>
            </div>
            <button
                onClick={() => window.open(`https://solscan.io/tx/${signature}`, '_blank')}
                className={styles.openLink}>
                    <span style={{
                        color: "white", fontWeight: "bold",
                    }}>
                        OPEN IN SOLSCAN
                    </span>
            </button>
            {/* Add OpenSea button */}
            <p className={styles.questionText}>WOULD YOU LIKE TO DO ANOTHER TRANSACTION? </p>
        </div>
        <div className={styles.buttonsContainer}>
            <button onClick={() => navigate('/', {replace: true})} className={styles.returnButton}>
                <span className={styles.returnText}>RETURN TO HOME</span>
            </button>
            <button onClick={() => navigate('/atm', {replace: true})} className={styles.returnButton}>
                <span className={styles.returnText}>RETURN TO ATM</span>
            </button>
        </div>

        <LoginOverlay user={user}/>
    </main>);
}
