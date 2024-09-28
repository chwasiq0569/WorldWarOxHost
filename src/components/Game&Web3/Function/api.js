import {get_secret_hash, get_ssid} from "./hash";
import {ComputeBudgetProgram, Connection, PublicKey, Transaction} from "@solana/web3.js";
import {createTransferInstruction, getOrCreateAssociatedTokenAccount, TOKEN_PROGRAM_ID} from "@solana/spl-token";
import {getAddress, getDecimal} from "./getTokenBalance";
import {useWallet} from "@solana/wallet-adapter-react";

// User status
export const updateUserStatus = async ({name, status, type}) => {

    const hash = get_secret_hash(name);
    const sid = get_ssid();

    const response = await fetch(process.env.REACT_APP_API_URL + '/api/user-status', {
        method: 'POST', body: JSON.stringify({
            "name": name, "status": status, "type": type, "hash": hash, "sid": sid
        }), headers: {
            'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY,
        }
    });
    console.log(response)
    return response.ok;

}
// Get Coins
export const getUserCoin = async ({id, name}) => {

    const hash = get_secret_hash(name);
    const sid = get_ssid();

    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/get-coin', {
            method: 'POST', body: JSON.stringify({
                "id": id, "name": name, "hash": hash, "sid": sid
            }), headers: {
                'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY,
            }
        });

        const responseText = await response.text(); // Await the response text

        return {
            success: response.ok, message: responseText
        }
    } catch (e) {
        return {
            success: false, message: null
        }
    }
}

// Update Coins
export const updateUserCoin = async ({id, name, values, param, key}) => {

    const hash = get_secret_hash(name);
    const sid = get_ssid();

    let body = {
        success: false, message: null
    }

    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/update-coin', {
            method: 'POST', body: JSON.stringify({
                "id": id, "name": name, "values": values, "param": param, "key": key, "hash": hash, "sid": sid
            }), headers: {
                'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY,
            }
        });
        body = await response.json();
        return body;
    } catch (e) {
        return body;
    }
}

// Add Test
export const addTransaction = async ({name, operation, signature, amount, token}) => {
    const hash = get_secret_hash(name);
    const sid = get_ssid();
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/add-transaction', {
            method: 'POST', body: JSON.stringify({
                "name": name,
                "operation": operation,
                "signature": signature,
                "amount": amount,
                "token": token,
                "date": getDateAndTime(),
                "hash": hash,
                "sid": sid
            }), headers: {
                'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY,
            }
        });
        return response.ok;
    } catch (e) {
        return false;
    }
}
const getDateAndTime = () => {
    const date = new Date();
    return date.getFullYear() + ':' + String(date.getMonth() + 1).padStart(2, '0') + ':' + String(date.getDate()).padStart(2, '0') + ' ' + String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0');
}

// Token Test
export const withdrawToken = async ({recipientPublicKey, amount, name, type}) => {

    const hash = get_secret_hash(name);

    try {
        const response = await fetch(process.env.REACT_APP_API_URL + '/api/withdraw-token', {
            method: 'POST', body: JSON.stringify({
                "recipientPublicKey": recipientPublicKey, "amount": amount, "type": type, "name": name, "hash": hash
            }), headers: {
                'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY,
            }
        });
        return response.ok;
    } catch (e) {
        return false;
    }
}
