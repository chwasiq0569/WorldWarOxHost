export default function ParseCoin(user, isBDUCK) {
    if (isBDUCK) {
        return user.split('&')[1].toLocaleString()

    } else {
        return user.split('&')[0].toLocaleString()

    }
}


export function updateCoinValue(data, amount, coin_Type) {
    // Split the data string into an array of coin values
    let [WWX, BDUCK] = data.split('&');

    // Update the correct coin value based on the coin_Type
    if (coin_Type === 'WWX') {
        WWX = amount;
    } else if (coin_Type === 'BDUCK') {
        BDUCK = amount;
    } else {
        throw new Error('Invalid coin type. Use "coinA" or "coinB".');
    }

    return `${WWX}&${BDUCK}`;

}

export function extractCoin(data) {
    return data.replace(/^success/, '');


}