import React, {useMemo} from "react";
import styles from "./Withdraw.css"
import ReturnButton from "../../TellerATM/components/ReturnButton";
import {clusterApiUrl} from "@solana/web3.js";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {ConnectionProvider, useWallet, WalletProvider} from "@solana/wallet-adapter-react";
import {WalletModalProvider, WalletMultiButton} from "@solana/wallet-adapter-react-ui";

const WithdrawManager = () => {

    const {publicKey} = useWallet();


    const handleReceiveToken = async (amount) => {

        if (!publicKey) {
            window.alert('Wallet not connected or amount missing');
            return;
        }

        const formData = new URLSearchParams();
        formData.append('recipientPublicKey', publicKey.toString());
        formData.append('amount', amount);

        try {
            const response = await fetch(process.env.REACT_APP_API_URL + '/receive-token', { // Replace with your URL
                method: 'POST', body: formData, headers: {
                    'x-api-key': process.env.REACT_APP_API_KEY, // Replace with your actual API key
                }
            });


            const result = await response.text();

            if (response.ok) {
                // Handle successful response
                console.log('Update successful', result);
            } else {
                console.error('Request failed', result);
            }

        } catch (e) {
            console.error('Request failed', e);
        }
    }

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

        <button onClick={() => {
            console.log(publicKey.toString())
        }}>Withdraw
        </button>
    </main>;
}

const Withdraw = () => {
    const network = clusterApiUrl('devnet'); // Use 'mainnet-beta' for production

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (<ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <WithdrawManager/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>);
};


export default Withdraw;