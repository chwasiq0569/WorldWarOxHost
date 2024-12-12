import React, {useMemo, useState, useEffect, useRef} from 'react';
import styles from './choosetoken.module.css';
import loanIcon from "../TellerATM/icons/teller.png";
import ReturnButton from '../TellerATM/components/ReturnButton';
import WW3Token from "../../../assets/ww3token.png";
import BDuckToken from "../../../assets/bducktoken.png";
import WithdrawArrow from "../../../assets/witdrawarrow.png";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import LoginOverlay from "../Login/LoginOverlay";
import {Get} from "../Function/database";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {ConnectionProvider, WalletProvider, useWallet} from "@solana/wallet-adapter-react";
import {WalletModalProvider, WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {addCommaToNumber, coinFormatter} from "../Function/coinFormatter";
import ParseCoin from "../Function/parseCoin";
import {useDepositManager} from "../Function/getTokenBalance";
import {getDailyLimit, getUserDapp, updateUserRow} from "../Function/api";
import LoadingOverlay from "../Login/LoadingOveraly";


const ChooseToken = ({withdrawToken, setWithdrawToken}) => {
    const network = process.env.REACT_APP_MAIN_RPC; // Use 'mainnet-beta' for production
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (<ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <ChooseTokenManager withdrawToken={withdrawToken} setWithdrawToken={setWithdrawToken}/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>);
};

const ChooseTokenManager = ({withdrawToken, setWithdrawToken}) => {
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();

    const user = Get();
    const {publicKey, connected} = useWallet(); // Access wallet status
    const [tokens, setTokens] = useState([]);
    const {fetchTokenBalance} = useDepositManager();
    const apiCalled = useRef(false); // Ref to track if the API call has been made
    const [loading, setLoading] = useState(false); // Loading state
    const [dapp, setDapp] = useState(null);
    const [timeLeft, setTimeLeft] = useState(null); // State for time difference

    const updateDailyLimit = (parsedData, coinLimit) => {
        const coindata = JSON.parse(coinLimit.message);
        const metadata = JSON.parse(coindata.metadata);
        let data = parsedData;

        data.date = new Date().toISOString();
        data.withdrawal.ww3 = metadata.WithdrawalWW3;
        data.withdrawal.bduck = metadata.WithdrawalBDUCK;
        data.deposit.ww3 = metadata.DepositWW3;
        data.deposit.bduck = metadata.DepositBDUCK;

        return data; // Or handle server updates here
    };
    const TimeDifference = (date) => {
        const currentDate = new Date().toISOString();
        const previousTimestamp = new Date(date).getTime();
        const currentTimestamp = new Date(currentDate).getTime();
        const diffInHours = (currentTimestamp - previousTimestamp) / (1000 * 60 * 60);
        return diffInHours >= 24;
    }

    const StoreData = (parsedData) => {
        setDapp(parsedData);

        if (parsedData.date) {
            const timeDiff = GetTimeDifferenceForReset(parsedData.date);
            if (timeDiff) {
                setTimeLeft(timeDiff);
            } else {
                setTimeLeft(null); // Reset if no time difference is left
            }
        }

    };

    const GetTimeDifferenceForReset = (date) => {
        const currentTime = new Date().getTime();
        const targetTime = new Date(date).getTime() + 24 * 60 * 60 * 1000; // Add 24 hours to the last reset time
        const diff = targetTime - currentTime;

        if (diff > 0) {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            return {hours, minutes};
        }
        return null;
    };

    const fetchTokenData = async () => {
        try {
            if (connected) {
                const bduckBalance = await fetchTokenBalance("BDUCK");
                const ww3Balance = await fetchTokenBalance("WW3");

                const bduck = state.isWithdraw ? ParseCoin(user.coins, true) : bduckBalance / 1e6;
                const ww0x = state.isWithdraw ? ParseCoin(user.coins, false) : ww3Balance / 1e9;

                const tokensData = [{
                    icon: WW3Token, name: 'WW3', rate: ww0x, displayRate: coinFormatter(ww0x), id: 0,
                }, {
                    icon: BDuckToken, name: 'BDUCK', rate: bduck, displayRate: coinFormatter(bduck), id: 1,
                },];
                setTokens(tokensData);
            } else {
                const bduckBalance = 0;
                const ww3Balance = 0;

                const bduck = bduckBalance / 1e6;
                const ww0x = ww3Balance / 1e9;

                const tokensData = [{
                    icon: WW3Token, name: 'WW3', rate: ww0x, displayRate: 0, id: 0,
                }, {
                    icon: BDuckToken, name: 'BDUCK', rate: bduck, displayRate: 0, id: 1,
                },];

                setTokens(tokensData);

            }
        } catch (err) {
            console.error("Error fetching token data:", err);
        }
    };

    useEffect(() => {
        fetchTokenData(); // Call token fetch function on wallet connection status change
    }, [connected]); // Trigger on wallet connection status changes

    useEffect(() => {
        if (apiCalled.current) return;

        const fetchUserData = async () => {
            try {
                apiCalled.current = true; // Prevent multiple calls
                setLoading(true); // Show loading overlay

                const userDapp = await getUserDapp({id: user.id, name: user.name});

                let parsedData = JSON.parse(userDapp.message);
                parsedData = JSON.parse(parsedData);

                if (parsedData.date === '' || TimeDifference(parsedData.date)) {
                    const coinLimit = await getDailyLimit();

                    if (coinLimit.success) {
                        parsedData = updateDailyLimit(parsedData, coinLimit);
                        parsedData = JSON.stringify(parsedData);

                        const result = await updateUserRow({
                            name: user.name, id: user.id, typ: "8", key: "dapp", data: parsedData,
                        });

                        if (!result) {
                            navigate('/atm');
                        } else {
                            StoreData(JSON.parse(parsedData));
                        }
                    }
                } else {
                    StoreData(parsedData);
                }

                fetchTokenData(); // Fetch tokens once user data is ready
            } catch (err) {
                console.error("Error fetching user data:", err);
            } finally {
                setLoading(false);
            }
        };

        if (connected) {
            fetchUserData();
        }
    }, [connected, user, fetchTokenBalance, state]);
    return (<main className={styles.container}>
        {loading && <LoadingOverlay/>}
        <ReturnButton to='/atm' btnName='RETURN TO ATM' value={{replace: true}}/>
        <div className={styles.topRightContainer}>
            <WalletMultiButton
                style={{
                    borderRadius: '45px',
                    backgroundColor: "#129f83",
                    border: `2px solid #14b797`,
                    boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.55)'
                }}
            />
        </div>
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>{state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}</h1>
            <p className={styles.questionText}>
                CHOOSE WHICH TOKEN TO {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}
            </p>
            {timeLeft && (<div>
                    <p className={styles.timeLeft}>
                        DAILY LIMIT RESETS IN: <p></p>{timeLeft.hours} HOURS {timeLeft.minutes} MINUTES
                    </p>
                <p className={styles.coinLimit}>
                        <p>
                            <b>DEPOSIT LIMIT REMAINING:</b>
                        </p>
                    <p>
                            WW3$ {addCommaToNumber(dapp.deposit.ww3)}
                        </p>
                    <p>
                            BDUCK$ {addCommaToNumber(dapp.deposit.bduck)}
                        </p>
                    <p className={styles.space}>
                        <b>WITHDRAWAL LIMIT REMAINING:</b>
                        </p>
                    <p>
                            WW3$ {addCommaToNumber(dapp.withdrawal.ww3)}
                        </p>
                    <p>
                            BDUCK$ {addCommaToNumber(dapp.withdrawal.bduck)}
                        </p>
                </p>
            </div>)}
        </div>
        <div className={styles.tokens}>
            {tokens.map(token => (<div
                key={token.id}
                className={styles.individualToken}
                onClick={() => {
                    setWithdrawToken(token);
                    navigate('/withdrawamount', {
                        replace: true, state: {
                            isWithdraw: state.isWithdraw, isBDUCK: token.id === 1, // Pass updated state
                            dapp: dapp
                        },
                    });
                }}
            >
                <img className={styles.tokenImg} src={token.icon} alt="token"/>
                <div className={styles.tokenDetails}>
                    <p className={styles.name}>{token.name}</p>
                    <p className={styles.price}>{token.displayRate}</p>
                </div>
                <img className={styles.withdrawArrow} src={WithdrawArrow} alt="Withdraw Arrow"/>
            </div>))}
        </div>
        <LoginOverlay user={user}/>
    </main>);
};

export default ChooseToken;

