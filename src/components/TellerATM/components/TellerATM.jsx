import React, {useMemo} from "react";
import styles from "./TellerATM.module.css";
import OptionCard from "./OptionCard";
import ReturnButton from "./ReturnButton";
import {Widget as TellerWidget} from "@teller-protocol/teller-widget";
import withdrawIcon from "../icons/withdraw.png";
import depositIcon from "../icons/deposit.png";
import loanIcon from "../icons/teller.png";
import ammoIcon from "../icons/ammo.png";
import healthIcon from "../icons/health.png";
import {useLocation, useNavigate} from 'react-router-dom';
import {Get} from '../../Game/Function/Database';
import {
    WalletModalProvider,
    WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {clusterApiUrl} from "@solana/web3.js";
import '@solana/wallet-adapter-react-ui/styles.css';


const whiteListedTokens = {
    [8453]: ["0xB9a3F938a462B94c3cEe84eEFD4fd764fFd1254B"]
};

const TellerManager = () => {
    const navigate = useNavigate();

    const user = Get();

    const options = [{
        title: "WITHDRAW", icon: withdrawIcon, status: "COMING AUGUST", isSpecial: true
    }, {title: "DEPOSIT", icon: depositIcon, status: "COMING AUGUST", isSpecial: true}, {
        title: "GET LOAN", icon: loanIcon, status: "BY TELLER", isSpecial: true
    }, {title: "AMMO", icon: ammoIcon, status: "PACK", isSpecial: true}, {
        title: "HEALTH", icon: healthIcon, status: "PACK", isSpecial: true
    },];

    return <main className={styles.container}>
        <ReturnButton to='/' btnName='RETURN TO HOME'/>
        <div className={styles.topRightContainer}>
            <WalletMultiButton style={{
                borderRadius: '45px', backgroundColor: "#129f83", border: `2px solid #14b797`,  boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.55)'

            }}/>
        </div>
        <img
            loading="lazy"
            src={loanIcon}
            alt="Teller ATM Logo"
            className={styles.logo}
        />
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>WELCOME TO THE TELLER ATM</h1>
            <p className={styles.questionText}>WHAT DO YOU WANT TO DO TODAY?</p>
        </div>
        <section className={styles.optionsWrapper}>
            {options.map((option, index) => <div key={index} className={styles.optionCardWrapper}>
                <OptionCard
                    title={option.title}
                    icon={option.icon}
                    status={option.status}
                    isSpecial={option.isSpecial}
                />
                {option.title === "GET LOAN" && (<TellerWidget
                    buttonLabel={""}
                    buttonClassName={styles.overlapButton}
                    isBareButton={true}
                    whitelistedTokens={whiteListedTokens}
                >
                    Invisible Button
                </TellerWidget>)}
            </div>)}
        </section>
        <div>
            <button className={styles.loginButton} onClick={() => navigate('/login')}>
                <span
                    className={styles.loginButtonText}>{user === null ? "LOGIN" : "Logged in as " + user.nick}</span>
            </button>
        </div>
        {user === null && <div className={styles.overlay}>
            <div className={styles.overlayContent}>
                <div className={styles.overlayText}>
                    <span>PLEASE LOGIN WITH YOUR GAME ACCOUNT TO USE ATM</span>
                </div>
                <button className={styles.overlayLoginButton} onClick={() => navigate('/login')}>
                    LOGIN
                </button>
                <div>
                    <button className={styles.overlayBackButton} onClick={() => navigate('/')}>
                        BACK
                    </button>
                </div>

            </div>
        </div>}
    </main>;
};

const TellerATM = () => {
    const network = clusterApiUrl('devnet'); // Use 'mainnet-beta' for production

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (<ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <TellerManager/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>);
};


export default TellerATM;
