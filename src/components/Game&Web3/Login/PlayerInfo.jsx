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
        {/*<p>
            <><br/></>
            <strong>WITHDRAWAL LIMIT </strong><><br/></>
            <strong>WW3 </strong>{JSON.parse(player.dapp)?.withdrawal.ww3}<><br/></>
            <strong>BDUCK </strong>{JSON.parse(player.dapp)?.withdrawal.bduck}<><br/><br/></>
            <strong>DEPOSIT LIMIT </strong><><br/></>
            <strong>WW3 </strong>{JSON.parse(player.dapp)?.deposit.ww3}<><br/></>
            <strong>BDUCK </strong>{JSON.parse(player.dapp)?.deposit.bduck}<><br/></>

        </p>*/}
        {/*
            <p><strong>Coins:</strong> {player.coins}</p>
*/}
    </div>);
};

export default PlayerInfo;
