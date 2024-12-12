import React, {useEffect, useState} from 'react';
import styles from "./customamount.module.css";
import ReturnButton from '../TellerATM/components/ReturnButton';
import WithdrawArrow from "../../../assets/witdrawarrow.png";
import loanIcon from "../TellerATM/icons/teller.png";
import RemoveBtn from '../../../assets/removebtn.png';
import {useNavigate, useLocation} from 'react-router-dom';
import LoginOverlay from "../Login/LoginOverlay";
import {Get} from "../Function/database";
import CustomAlert from "../Login/CustomAlert";
import {addCommaToNumber, getAmount} from "../Function/coinFormatter";


export default function CustomAmount({token}) {
    const [alertMessage, setAlertMessage] = useState(''); // State to manage the alert message
    const navigate = useNavigate(); // Use useNavigate hook
    const location = useLocation();
    const state = location.state;
    const user = Get();

    const [value, setValue] = React.useState('');

    useEffect(() => {
        // Redirect if state or isWithdraw is missing
        if (!state || state.isWithdraw === null || state.isWithdraw === undefined) {
            navigate("/atm");
        }
    }, [state, navigate]);


    const handleButtonClick = (num) => {
        setValue((prevValue) => {
            // Prevent adding '0' as the first digit
            if (num === '0' && prevValue === '') {
                return prevValue;
            }
            // Limit input to prevent exceeding displayRate
            const newValue = prevValue + num;
            const displayRateValue = getAmount(state);
            return parseFloat(newValue) <= displayRateValue ? newValue : prevValue;
        });
    };

    const handleRemoveClick = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
    };

    const closeAlert = () => {
        setAlertMessage(''); // Clear the alert message to close the alert
    };


    const handleWithdrawClick = () => {

        if (value === '') {
            setAlertMessage("Please enter a valid amount.");
            return;
        }

        const displayRateValue = token.rate;
        const enteredValue = parseFloat(value);
        if (enteredValue > displayRateValue) {
            setAlertMessage("You don't have enough tokens. Please enter a lower amount.");
        } else if (enteredValue <= 0) {
            setAlertMessage("Please enter a valid amount.");
        } else {
            navigate('/withdrawprocessing', {
                replace: true, state: {
                    isWithdraw: state.isWithdraw, amount: enteredValue, isBDUCK: state.isBDUCK, dapp: state.dapp
                }
            });
        }
    };

    return (<main className={styles.container}>
        {alertMessage && <CustomAlert message={alertMessage} onClose={closeAlert}/>} {/* Render the custom alert */}
        <ReturnButton to='/withdrawamount' btnName='BACK' value={{
            replace: true, state: {
                isWithdraw: state.isWithdraw, isBDUCK: state.isBDUCK, dapp: state.dapp,
            }
        }}/>
        <img
            loading="lazy"
            src={loanIcon}
            alt="Teller ATM Logo"
            className={styles.logo}
        />
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>{state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}</h1>
            <p className={styles.questionText}>CHOOSE THE AMOUNT
                OF {state.isBDUCK ? "$BDUCK" : "$WW3"} TO {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}</p>
            <p className={styles.secondaryText}>DAILY {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"} LIMIT
                <span> {addCommaToNumber(getAmount(state))} {state.isBDUCK ? "$BDUCK" : "$WW3"}</span></p>
        </div>

        <div className={styles.customAmount}>
            <div className={styles.customInput}>
                <div className={styles.customCounter}>
                    <div className={styles.screen}>
                        <p>{value}</p>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.row}>
                            <button onClick={() => handleButtonClick('1')}>1</button>
                            <button onClick={() => handleButtonClick('2')}>2</button>
                            <button onClick={() => handleButtonClick('3')}>3</button>
                            <button onClick={() => handleButtonClick('4')}>4</button>
                            <button onClick={() => handleButtonClick('5')}>5</button>
                            <button onClick={() => handleButtonClick('6')}>6</button>
                        </div>
                        <div className={styles.row}>
                            <button onClick={() => handleButtonClick('7')}>7</button>
                            <button onClick={() => handleButtonClick('8')}>8</button>
                            <button onClick={() => handleButtonClick('9')}>9</button>
                            <button onClick={() => handleButtonClick('0')}>0</button>
                            <button className={styles.removeBtn} onClick={handleRemoveClick}>
                                <img src={RemoveBtn} alt="remove"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleWithdrawClick} className={styles.withdrawBtn}>
                <p>{state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}</p>
                <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
            </div>
        </div>

        <div className={styles.tokens}>
            <span>BALANCE</span>
            <div className={styles.individualToken}>
                <img className={styles.tokenImg} src={token.icon} alt="token"/>
                <div className={styles.tokenDetails}>
                    <p className={styles.name}>{token.name}</p>
                    <p className={styles.price}>{token.displayRate}</p>
                </div>
            </div>
        </div>
        <LoginOverlay user={user}/>
    </main>);
}
