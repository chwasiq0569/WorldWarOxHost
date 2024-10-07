import React from 'react';
import style from './playerInfo.module.css';
import ParseCoin from "../Function/parseCoin";

const PlayerInfo = ({player}) => {


    return (<div className={style.playerInfoContainer}>
        <p>
            <strong>Name:</strong> {player.nick}
        </p>
        <p>
            <strong>Kills:</strong> {player.kills}
        </p>
        <p>
            <strong>Deaths:</strong> {player.deaths}
        </p>
        <p>
            <strong>Score:</strong> {player.score}
        </p>
       <p>
            <strong>WW0X: </strong> {ParseCoin(player.coins, false)}
        </p>
        <p>
            <strong>BDUCK: </strong>{ParseCoin(player.coins, true)}
        </p>
        {/*
            <p><strong>Coins:</strong> {player.coins}</p>
*/}
    </div>);
};

export default PlayerInfo;
