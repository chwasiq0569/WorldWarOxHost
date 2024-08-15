import React, {useCallback, useMemo, useState} from "react";
import ReturnButton from "../../TellerATM/components/ReturnButton";
import {useNavigate} from 'react-router-dom';
import {Get} from '../../Game/Function/Database';
import {
    WalletModalProvider, WalletMultiButton
} from "@solana/wallet-adapter-react-ui";
import {ConnectionProvider, useWallet, WalletProvider} from "@solana/wallet-adapter-react";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {
    clusterApiUrl,
    ComputeBudgetProgram,
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    Struct as bs58,
    SystemProgram,
    Transaction
} from "@solana/web3.js";
import '@solana/wallet-adapter-react-ui/styles.css';
import {createTransferInstruction, getOrCreateAssociatedTokenAccount, TOKEN_PROGRAM_ID} from "@solana/spl-token";


const ParseCoin = (user, isBDUCK) => {

    if (isBDUCK) {
        return user.coins.split('&')[1].toLocaleString()

    } else {
        return user.coins.split('&')[0].toLocaleString()

    }
}
const DepositManager = () => {
    const navigate = useNavigate();

    const user = Get();

    const {publicKey, sendTransaction} = useWallet();
    const [amount, setAmount] = useState('');

    const handleSendToken = useCallback(async () => {

        if (!publicKey || !amount) {
            window.alert('Wallet not connected or amount missing');
            return;
        }

        try {
            const connection = new Connection(process.env.REACT_APP_MAIN_RPC, 'confirmed');
            const mintPublicKey = new PublicKey(process.env.MINT_ADDRESS);

            const senderTokenAccount = await getOrCreateAssociatedTokenAccount(connection, publicKey, mintPublicKey, publicKey);

            const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(connection, new PublicKey(process.env.REACT_APP_PUBLIC_KEY), mintPublicKey, new PublicKey(process.env.REACT_APP_PUBLIC_KEY));

            const transaction = new Transaction().add(createTransferInstruction(senderTokenAccount.address, recipientTokenAccount.address, publicKey, amount * 1e6, // Assuming 6 decimals for the token
                [], TOKEN_PROGRAM_ID));

            const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
                microLamports: 1, // Adjust the fee as needed
            });
            transaction.add(addPriorityFee);

            const signature = await sendTransaction(transaction, connection);

            // Confirm transaction using block height
            const block = await connection.getLatestBlockhash("confirmed");
            const result = await connection.confirmTransaction({
                signature, ...block,
            }, "confirmed");

            const error = result.value.err;

            if (error) {
                window.alert('Error sending token: ' + error.toString());
            } else {
                window.alert('Token transaction successful');

            }

        } catch (error) {
            console.log(error.message);
            window.alert('Error sending token: ' + error.message);
        }
    }, [publicKey, amount, sendTransaction]);


    const handleSendSol = useCallback(async () => {
        if (!publicKey || !amount) {
            window.alert('Wallet not connected or amount missing');
            return;
        }

        try {
            const connection = new Connection(clusterApiUrl("devnet"), 'confirmed');
            const recipientPublicKey = new PublicKey(process.env.REACT_APP_PUBLIC_KEY);
            const transaction = new Transaction().add(SystemProgram.transfer({
                fromPubkey: publicKey, toPubkey: recipientPublicKey, lamports: amount * LAMPORTS_PER_SOL, // Convert SOL to lamports
            }));

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');

            window.alert('SOL transaction successful');
        } catch (error) {
            console.log(error.message);
            window.alert('Error sending SOL: ' + error.message);
        }
    }, [publicKey, amount, sendTransaction]);

    return <main>
        <ReturnButton to='/' btnName='RETURN TO HOME'/>

        <div className={"topRightContainer"}>
            <WalletMultiButton style={{
                borderRadius: '45px',
                backgroundColor: "#129f83",
                border: `2px solid #14b797`,
                boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.55)'

            }}/>
        </div>

        <div>
            <input
                type="number"
                placeholder="Amount in SOL"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handleSendSol}>
                Send SOL
            </button>
        </div>

        {user === null && <div className="overlay">
            <div className="overlayContent">
                <div className="overlayText">
                    <span>PLEASE LOGIN WITH YOUR GAME ACCOUNT TO USE ATM</span>
                </div>
                <button className="overlayLoginButton" onClick={() => navigate('/login')}>
                    LOGIN
                </button>
                <div>
                    <button className="overlayBackButton" onClick={() => navigate('/')}>
                        BACK
                    </button>
                </div>

            </div>
        </div>}
    </main>;
};

const Deposit = () => {
    const network = clusterApiUrl('devnet'); // Use 'mainnet-beta' for production

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (<ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <DepositManager/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>);
};


export default Deposit;
