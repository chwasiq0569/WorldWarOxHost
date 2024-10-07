import {
    Connection,
    PublicKey,
} from "@solana/web3.js";
import {
    getAccount,
    getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";


export const getAddress = (type) => {
    if (type === 'WW3') {
        return process.env.REACT_APP_TOKEN_WW3_MINT_ADDRESS
    } else if (type === 'BDUCK') {
        return process.env.REACT_APP_TOKEN_BUDCK_MINT_ADDRESS
    }
}

export const getDecimal = (type) => {

    if (type === 'WW3') {
        return 1e9;
    } else if (type === 'BDUCK') {
        return 1e6;
    }
}

export const useDepositManager = () => {
    const { publicKey } = useWallet();  // useWallet must be used within a hook or component
    const connection = new Connection(process.env.REACT_APP_MAIN_RPC, 'confirmed');


    const getConnectedWalletAddress = () => {
        return publicKey.toString(); // Convert the public key to a string
    };

    const fetchTokenBalance = async (type) => {

        const walletAddress = getConnectedWalletAddress();
        const tokenAddress = getAddress(type);

        const tokenMintAddress = new PublicKey(tokenAddress); // Replace with your token mint address

        try {
            const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                new PublicKey(walletAddress), // payer
                tokenMintAddress, // mint address
                new PublicKey(walletAddress) // owner address
            );

            const accountInfo = await getAccount(connection, associatedTokenAccount.address);
            return accountInfo.amount.toString(); // Return balance as a string
        } catch (error) {
            throw new Error('Error fetching token balance: ' + error.message);
        }
    };

    // Other functions like sendToken and sendSol would be defined similarly, using getConnectedWalletAddress()

    return {
        fetchTokenBalance,
        // sendToken, sendSol, etc.
    };
};
