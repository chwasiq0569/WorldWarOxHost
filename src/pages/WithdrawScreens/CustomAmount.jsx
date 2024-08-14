import React from 'react'
import styles from "./customamount.module.css"
import ReturnButton from '../../components/TellerATM/components/ReturnButton';
import WithdrawArrow from "../../assets/witdrawarrow.png"
import WW3Token from "../../assets/ww3token.png"
import loanIcon from "../../components/TellerATM/icons/teller.png";
import RemoveBtn from '../../assets/removebtn.png'

export default function CustomAmount() {

    const [value, setValue] = React.useState('');

    const handleButtonClick = (num) => {
        setValue((prevValue) => {
            // Prevent adding '0' as the first digit
            if (num === '0' && prevValue === '') {
                return prevValue;
            }
            return prevValue + num;
        });
    };

    const handleRemoveClick = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
    };

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
                                    <img src={RemoveBtn} alt="remove" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.withdrawBtn}>
                    <p>WITHDRAW</p>
                    <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" />
                </div>
            </div>

            <div className={styles.tokens}>
                <><span>BALANCE</span> {
                    tokens.map(token => (
                        <div className={styles.individualToken}>
                            <img className={styles.tokenImg} src={token.icon} alt="token" />
                            <div className={styles.tokenDetails}>
                                <p className={styles.name}>{token.name}</p>
                                <p className={styles.price}>{token.rate}</p>
                            </div>
                            <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow" />
                        </div>
                    ))
                }</>
            </div>
        </main>
    )
}
