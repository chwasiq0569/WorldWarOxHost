import React, {useMemo, useState, useEffect} from 'react';
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
import {coinFormatter} from "../Function/coinFormatter";
import ParseCoin from "../Function/parseCoin";
import {useDepositManager} from "../Function/getTokenBalance";

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

    // Fetch tokens when the wallet connects/disconnects
    useEffect(() => {
        const fetchTokens = async () => {
            const bduckBalance = await fetchTokenBalance("BDUCK");
            const ww3Balance = await fetchTokenBalance("WW3");

            const bduck = state.isWithdraw ? ParseCoin(user.coins, true) : bduckBalance / 1e6;
            const ww0x = state.isWithdraw ? ParseCoin(user.coins, false) : ww3Balance / 1e9;

            const tokensData = [{
                icon: WW3Token, name: 'WW3', rate: ww0x, displayRate: coinFormatter(ww0x), id: 0
            }, {
                icon: BDuckToken, name: 'BDUCK', rate: bduck, displayRate: coinFormatter(bduck), id: 1
            }];

            setTokens(tokensData);
        };

        if (connected) {
            fetchTokens();
        } else {
            setTokens([{
                icon: WW3Token, name: 'WW3', rate: 0, displayRate: 0, id: 1
            }, {
                icon: BDuckToken, name: 'BDUCK', rate: 0, displayRate: 0, id: 2
            }]); // Clear tokens on disconnect
        }
    }, [connected]); // Re-run effect if wallet connection status changes

    return (<main className={styles.container}>
        <ReturnButton to='/atm' btnName='RETURN TO ATM' value={{
            replace: true,
        }}/>
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
        <img
            loading="lazy"
            src={loanIcon}
            alt="Teller ATM Logo"
            className={styles.logo}
        />
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>{state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}</h1>
            <p className={styles.questionText}>CHOOSE WHICH TOKEN TO {state.isWithdraw ? "WITHDRAW" : "DEPOSIT"}</p>
        </div>
        <div className={styles.tokens}>
            {tokens.map(token => (token.rate > 0 ? (<div
                key={token.id}
                className={styles.individualToken} onClick={() => {
                setWithdrawToken(token);
                navigate('/withdrawamount', {
                    replace:true,
                    state: {
                        isWithdraw: state.isWithdraw, isBDUCK: token.id === 1
                    }
                });
            }}>
                <img className={styles.tokenImg} src={token.icon} alt="token"/>
                <div className={styles.tokenDetails}>
                    <p className={styles.name}>{token.name}</p>
                    <p className={styles.price}>{token.displayRate}</p>
                </div>
                <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
            </div>) : (<div key={token.id} className={styles.individualToken}>
                <img className={styles.tokenImg} src={token.icon} alt="token"/>
                <div className={styles.tokenDetails}>
                    <p className={styles.name}>{token.name}</p>
                    <p className={styles.price}>{token.displayRate}</p>
                </div>
                <img className={styles.withdrawArrow} src={WithdrawArrow} alt="WithdrawArrow"/>
            </div>)))}
        </div>

        <LoginOverlay user={user}/>
    </main>);
};

export default ChooseToken;

