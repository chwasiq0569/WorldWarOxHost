import React, {useCallback, useEffect, useMemo, useState} from 'react';
import styles from './withdrawprocessing.module.css';
import loanIcon from "../TellerATM/icons/teller.png";
import LoginOverlay from "../Login/LoginOverlay";
import {Get, Set} from "../Function/database";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {ConnectionProvider, useWallet, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {useLocation, useNavigate} from "react-router-dom";
import {
    clusterApiUrl, ComputeBudgetProgram, Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction
} from "@solana/web3.js";
import {createTransferInstruction, getOrCreateAssociatedTokenAccount, TOKEN_PROGRAM_ID} from "@solana/spl-token";
import {getAddress, getDecimal} from "../Function/getTokenBalance";
import CustomAlert from "../Login/CustomAlert";
import {addTransaction, updateUserCoin, updateUserRow} from "../Function/api";
import {extractCoin, updateCoinValue} from "../Function/parseCoin";


const WithdrawProcessing = ({withdrawToken, setWithdrawToken}) => {
    const network = process.env.REACT_APP_MAIN_RPC; // Use 'mainnet-beta' for production
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (<ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <WithdrawProcessingManager/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>);
};

const WithdrawProcessingManager = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [isProcessing, setIsProcessing] = useState(true);
    const {publicKey, sendTransaction} = useWallet();
    const navigator = useNavigate();

    const user = Get();
    const location = useLocation();
    const state = location.state;

    const {amount, isBDUCK, isWithdraw} = state;

    if (amount === null || !isBDUCK === null || !isWithdraw === null) {
        navigator('/atm', {
            replace: true
        });
    }

    const handleSendToken = useCallback(async () => {
        if (!publicKey || !amount) {
            return {success: false, message: 'Wallet not connected or amount missing', signature: null};
        }

        try {
            const connection = new Connection(process.env.REACT_APP_MAIN_RPC, 'confirmed');
            const mintPublicKey = new PublicKey(getAddress(isBDUCK ? "BDUCK" : "WW3"));

            // Ensure sender's token account exists
            const senderTokenAccount = await getOrCreateAssociatedTokenAccount(connection, publicKey, mintPublicKey, publicKey);

            // Ensure recipient's token account exists
            const recipientPublicKey = new PublicKey(process.env.REACT_APP_PUBLIC_KEY);
            const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(connection, recipientPublicKey, mintPublicKey, recipientPublicKey);

            // Ensure both token accounts were created or fetched
            if (!senderTokenAccount || !recipientTokenAccount) {
                return {success: false, message: 'Failed to create or fetch token accounts', signature: null};
            }

            // Create the transaction to transfer tokens
            const transaction = new Transaction().add(createTransferInstruction(senderTokenAccount.address, recipientTokenAccount.address, publicKey, amount * getDecimal(isBDUCK ? "BDUCK" : "WW3"), [], TOKEN_PROGRAM_ID));

            // Add priority fee to the transaction
            const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
                microLamports: 1, // Adjust the fee as needed
            });
            transaction.add(addPriorityFee);

            // Send the transaction
            const signature = await sendTransaction(transaction, connection);

            // Confirm the transaction
            const block = await connection.getLatestBlockhash("confirmed");
            const result = await connection.confirmTransaction({signature, ...block}, "confirmed");

            // Check for errors in the transaction result
            if (result.value.err) {
                return {success: false, message: 'Token transaction failed', signature: result.value};
            } else {
                return {success: true, message: 'Token transaction successful', signature: signature};
            }
        } catch (error) {
            // Handle and log errors
            console.error("Token transaction error:", error);
            if (error.message.includes("insufficient funds")) {
                return {
                    success: false, message: 'Insufficient SOL to create associated token account', signature: null
                };
            }
            return {success: false, message: `Token transaction failed: ${error.message}`, signature: null};
        }
    }, [publicKey, amount, sendTransaction, isBDUCK]);

    const handleSendSol = useCallback(async () => {
        if (!publicKey) return {success: null, message: null, signature: null};

        try {
            const connection = new Connection(clusterApiUrl("devnet"), 'confirmed');
            const recipientPublicKey = new PublicKey(process.env.REACT_APP_PUBLIC_KEY);
            const transaction = new Transaction().add(SystemProgram.transfer({
                fromPubkey: publicKey, toPubkey: recipientPublicKey, lamports: 0.1 * LAMPORTS_PER_SOL, // Convert SOL to lamports
            }));

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            return {success: true, message: 'SOL transfer successful', signature};

        } catch (error) {
            console.log(error);
            return {success: false, message: error.message, signature: null};
        }
    }, [publicKey, sendTransaction]);

    function getDepositUpdateLimits(amount, isBDUCK) {
        const dapp = state.dapp;

        if (isBDUCK) {
            dapp.deposit.bduck -= amount;
        } else {
            dapp.deposit.ww3 -= amount;
        }

        return JSON.stringify(dapp);

    }

    const processTransaction = useCallback(async () => {
        if (!publicKey) return;

        const result = await handleSendToken();

        if (result.success) {
            let coin_update_success = false;
            // call API
            try {
                const coin_result = await updateUserCoin({
                    id: user.id, name: user.name, values: amount, param: isBDUCK ? '1' : '0', key: 1 // add
                });

                // Update coin locally
                if (coin_result.success) {
                    const currentData = Get();
                    currentData.coins = updateCoinValue(currentData.coins, extractCoin(coin_result.message), isBDUCK ? "BDUCK" : "WWX");
                    Set(currentData);
                }

                coin_update_success = coin_result.success;

                const transaction_result = await addTransaction({
                    name: user.name,
                    operation: 'deposit',
                    signature: result.signature,
                    amount: coin_result.success ? amount.toString() : '0',
                    token: isBDUCK ? "$BDUCK" : "$WW3"
                });

                console.log(transaction_result);


                const update_limit = await updateUserRow({
                    name: user.name,
                    id: user.id,
                    typ: "8",
                    key: 'dapp',
                    data: getDepositUpdateLimits(coin_result.success ? amount.toString() : '0', isBDUCK),
                });

                console.log(update_limit);


            } catch (e) {
                coin_update_success = false;
                await addTransaction({
                    name: user.name,
                    operation: 'deposit',
                    signature: result.signature,
                    amount: null,
                    token: isBDUCK ? "$BDUCK" : "$WW3"
                });
            }
            navigator('/withdrawdone', {
                replace: true,
                state: {signature: result.signature, amount, isBDUCK, isWithdraw, success: coin_update_success}
            });
        } else {
            setAlertMessage(result.message || 'Test failed.');
        }
    }, [publicKey, amount, isBDUCK, isWithdraw, navigator, handleSendToken]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (publicKey) {
                setIsProcessing(false);
                clearInterval(interval);
                processTransaction();
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [publicKey, processTransaction]);

    return (<main className={styles.container}>
        {alertMessage && (<CustomAlert
            message={`${alertMessage}`}
            onClose={() => navigator('/atm', {
                replace: true
            })}
        />)}
        <img
            loading="lazy"
            src={loanIcon}
            alt="Teller ATM Logo"
            className={styles.logo}
        />
        <div className={styles.contentWrapper}>
            <h1 className={styles.welcomeText}>
                {isWithdraw ? "WITHDRAWING " : "DEPOSITING "}
                <span>{amount}</span>{isBDUCK ? " $BDUCK" : " $WW3"}
            </h1>
            <p className={styles.questionText}>
                PLEASE WAIT WHILE YOUR TRANSACTION IS PROCESSING
            </p>
            <div className={styles.noteText}>
                KEEP THIS TAB OPEN TO PREVENT LOSING YOUR PROGRESS
            </div>
        </div>
        <div className={styles.loader}>
            <img
                loading="lazy"
                src={loanIcon}
                alt="Teller ATM Logo"
                className={styles.logo}
            />
        </div>
        <LoginOverlay user={user}/>
    </main>);
};

export default WithdrawProcessing;
