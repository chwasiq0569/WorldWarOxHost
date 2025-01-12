import React, {useEffect, useRef, useState} from 'react';
import styles from './withdrawdone.module.css';
import loanIcon from "../TellerATM/icons/teller.png";
import {useLocation, useNavigate} from 'react-router-dom';
import LoginOverlay from "../Login/LoginOverlay";
import {Get} from "../Function/database";
import {getAllTransaction, getDailyLimit} from "../Function/api";
import {addCommaToNumber} from "../Function/coinFormatter";


export default function WithdrawDone() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state || {};
    const {success, isBDUCK , amount, signature , isWithdraw} = state;

    const user = Get();
    const [isNavigating, setIsNavigating] = useState(false);
    const apiCalled = useRef(false);
    const [transactions, setTransactions] = useState([]); // State to store transactions


    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(signature);
        alert('Copied to clipboard!');
    };

    useEffect(() => {
        if (apiCalled.current) return;

        const fetchTransaction = async () => {
            try {
                const all_transaction = await getAllTransaction();
                if (all_transaction.success){
                    const data = JSON.parse(all_transaction.message);
                    if (data.status === 'success'){
                        setTransactions( data.transactions);
                    }
                }
                apiCalled.current = true;
            } catch (e) {
                console.error('Error fetching transaction:', e);
            }
        };

        fetchTransaction();
    }, []);

    useEffect(() => {
        const handlePopState = () => navigate('/atm', {replace: true});
        const handleBeforeUnload = (event) => {
            if (!isNavigating) {
                event.preventDefault();
                event.returnValue = ''; // Default confirmation
            }
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [navigate, isNavigating]);

    return (
        <main className={styles.container}>
            <img src={loanIcon} alt="Teller ATM Logo" className={styles.logo} />
            <div className={styles.contentWrapper}>
                <h1 className={styles.welcomeText}>THANK YOU FOR USING THE TELLER ATM</h1>
                <p className={styles.signatureText}>
                    {success
                        ? `SUCCESS! ${amount} ${isBDUCK ? "$BDUCK" : "$WW3"} WAS SUCCESSFULLY ${isWithdraw ? "WITHDRAWN" : "DEPOSITED"} TO USER ${user.nick?.toUpperCase()}`
                        : `TRANSACTION COMPLETED, BUT DEPOSIT WAS UNSUCCESSFUL. PLEASE COPY YOUR SIGNATURE AND REACH OUT TO OUR SUPPORT TEAM.`}
                </p>
                <p className={styles.copyText} onClick={handleCopyToClipboard}>
                    {signature}
                </p>
                <button
                    onClick={() => window.open(`https://solscan.io/tx/${signature}`, '_blank')}
                    className={styles.openLink}
                >
                    <span style={{ color: "white", fontWeight: "bold" }}>OPEN IN SOLSCAN</span>
                </button>
                <p className={styles.questionText}>LATEST TRANSACTION!</p>
            </div>

            <div className={styles.transactionContainer}>
            {/* Table Header */}
            <div className={styles.tableHeader}>
                <span className={styles.column}>Amount</span>
                <span className={styles.column}>Token</span>
                <span className={styles.column}>Signature</span>
                <span className={styles.column}>Operation</span>
            </div>

            {/* Transaction List */}
            <div className={styles.transactionBar}>
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <div key={transaction.id} className={styles.transactionItem}>
                            <span>{addCommaToNumber(transaction.amount)}</span>
                            <span>{transaction.token}</span>
                            <span>{transaction.signature}</span>
                            <span>{transaction.operation.toUpperCase()}</span>
                        </div>
                    ))
                ) : (
                    <p className={styles.noData}>No transactions available.</p>
                )}
            </div>

            </div>

            <div className={styles.buttonsContainer}>
                <button onClick={() => navigate('/', {replace: true})} className={styles.returnButton}>
                    <span className={styles.returnText}>RETURN TO HOME</span>
                </button>
                <button onClick={() => navigate('/atm', {replace: true})} className={styles.returnButton}>
                    <span className={styles.returnText}>RETURN TO ATM</span>
                </button>
                <button onClick={() => navigate('/login', {replace: true})} className={styles.returnButton}>
                    <span className={styles.returnText}>LOGOUT</span>
                </button>
            </div>
            <LoginOverlay user={user}/>
        </main>
    );
}