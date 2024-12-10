import {concatAST} from "graphql/utilities";

export function coinFormatter(value) {
    if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + 'M';
    } else if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + 'K';
    } else {
        return value.toString();
    }
}

export function getAmount(state) {
    const isWithdraw = state.isWithdraw;
    const isBDUCK = state.isBDUCK;
    const dapp = state.dapp;
    const withdrawal = dapp.withdrawal;
    const deposit = dapp.deposit;

    if (isBDUCK) {
        if (isWithdraw) {
            return withdrawal.bduck;

        } else {
            return deposit.bduck;
        }
    } else {
        if (isWithdraw) {
            return withdrawal.ww3;

        } else {
            return deposit.ww3;
        }
    }
}



