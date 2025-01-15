import {
    Connection,
    PublicKey,
} from "@solana/web3.js";
import {
    getAccount,
    getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import {useWallet} from "@solana/wallet-adapter-react";


export const getAddress = (type) => {
    if (type === 'WW3') {
        return process.env.REACT_APP_TOKEN_WW3_MINT_ADDRESS
    } else if (type === 'BDUCK') {
        return process.env.REACT_APP_TOKEN_BUDCK_MINT_ADDRESS
    }
}

export const WithdrawalWW3Limit = 1000;
export const WithdrawalBDUCKLimit = 50000;

export const getDecimal = (type) => {

    if (type === 'WW3') {
        return 1e9;
    } else if (type === 'BDUCK') {
        return 1e6;
    }
}

export const useDepositManager = () => {
    const {publicKey} = useWallet(); // useWallet must be used within a hook or component
    const connection = new Connection(process.env.REACT_APP_MAIN_RPC, 'confirmed');

    const getConnectedWalletAddress = () => {
        return publicKey?.toString(); // Convert the public key to a string
    };

    const fetchTokenBalance = async (type) => {
        const walletAddress = getConnectedWalletAddress();
        if (!walletAddress) {
            throw new Error('Wallet not connected');
        }

        const tokenAddress = getAddress(type);
        const tokenMintAddress = new PublicKey(tokenAddress); // Replace with your token mint address

        try {
            const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
                connection,
                new PublicKey(walletAddress), // payer
                tokenMintAddress, // mint address
                new PublicKey(walletAddress) // owner address
            );

            // Check if the account exists and has a balance
            const accountInfo = await getAccount(connection, associatedTokenAccount.address);

            // If no tokens, return 0
            return accountInfo.amount?.toString() || '0';
        } catch (error) {
            // Handle case where the associated token account does not exist
            return '0'; // Return 0 if account does not exist

        }
    };

    return {
        fetchTokenBalance,
        // Other functions like sendToken, sendSol, etc.
    };
};