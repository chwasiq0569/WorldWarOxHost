import React, {useEffect, useState} from 'react';
import styles from "./withdrawamount.module.css";
import ReturnButton from '../TellerATM/components/ReturnButton';
import WithdrawArrow from "../../../assets/witdrawarrow.png";
import loanIcon from "../TellerATM/icons/teller.png";
import {useNavigate, useLocation} from 'react-router-dom';
import LoginOverlay from "../Login/LoginOverlay";
import {Get} from "../Function/database";
import CustomAlert from "../Login/CustomAlert";

export default function WithdrawAmount({withdrawToken, setWithdrawToken}) {

    const [alertMessage, setAlertMessage] = useState(''); // State to manage the alert message
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const user = Get();

    useEffect(() => {
        // Redirect if state or isWithdraw is missing
        if (!state || state.isWithdraw === null || state.isWithdraw === undefined) {
            navigate("/atm");
        }
    }, [state, navigate]);

    // Render nothing if redirecting
    if (!state || state.isWithdraw === null || state.isWithdraw === undefined) {
        return null;
    }

    const closeAlert = () => {
        setAlertMessage(''); // Clear the alert message to close the alert
    };

    // Function to handle the click event
    const handleClick = (amount) => {
        // Convert displayRate to numeric value for comparison
        const displayRateValue = withdrawToken.rate;
        // Define amounts to compare with
        const amounts = {"1K": 1000, "2K": 2000, "5K": 5000, "10K": 10000};

        // Check if the amount is valid and compare
        if (displayRateValue < amounts[amount]) {
            setAlertMessage("You don't have enough token");
        } else {
            navigate('/withdrawprocessing', {
                replace:true,
                state: {
                    isWithdraw: state.isWithdraw, isBDUCK: state.isBDUCK, amount: amounts[amount]
                }
            });
        }
    };


    return (<main className={styles.container}>
        {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert}/>} {/* Render the custom alert */}
        <ReturnButton
            to='/choosetoken'
            btnName='BACK'
            value={{
                replace : true,
                state: {isWithdraw: state.isWithdraw}}}
        />
        <img
            loading="lazy"
            src={loanIcon}
            alt="Teller ATM Logo"
            className={styles.logo}
        />
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>
                {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}
            </h1>
            <p className={styles.questionText}>
                CHOOSE THE AMOUNT OF {state.isBDUCK ? "$BDUCK" : "$WW3"} TO {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}
            </p>
            <p className={styles.secondaryText}>
                DAILY {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"} LIMIT
                <span> 100,000 {state.isBDUCK ? "$BDUCK" : "$WW3"}</span>
            </p>
        </div>

        <div className={styles.amounts}>
            <div className={styles.leftSection} onClick={() => {
                setWithdrawToken(withdrawToken);
                navigate('/customamount', {
                    replace:true,
                    state: {
                        isWithdraw: state.isWithdraw, isBDUCK: state.isBDUCK
                    }
                });
            }}>
                ANOTHER AMOUNT
            </div>
            <div className={styles.centerSection}>
                <div onClick={() => handleClick("1K")} className={styles.amount}
                >
                    1K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
                </div>
                <div onClick={() => handleClick("5K")} className={styles.amount}>
                    5K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
                </div>
            </div>
            <div className={styles.rightSection}>
                <div onClick={() => handleClick("2K")} className={styles.amount}>
                    2K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
                </div>
                <div onClick={() => handleClick("10K")} className={styles.amount}>
                    10K <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
                </div>
            </div>
        </div>

        <div className={styles.tokens}>
            <span>BALANCE</span>
            <div className={styles.individualToken}>
                <img className={styles.tokenImg} src={withdrawToken.icon} alt="token"/>
                <div className={styles.tokenDetails}>
                    <p className={styles.name}>{withdrawToken.name}</p>
                    <p className={styles.price}>{withdrawToken.displayRate}</p>
                </div>
            </div>
        </div>
        <LoginOverlay user={user}/>
    </main>);
}
