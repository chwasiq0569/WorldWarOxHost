import React from 'react'
import NFTDriven from "../../assets/noun-nft-4935073 1.png";
import CryptoPowered from "../../assets/Group.png";
import PlayEarnBet from "../../assets/noun-betting-5754753 1.png";

import './ThreeTypeNFT.css';

const ThreeTypeNFT = () => {
    return (
        <div>
            <div className="ThreeTypeSectionContainer">
                <div className="ThreeTypeSectionContainerCentered">
                    <div className="ThreeTypeSectionBox">
                        <img src={NFTDriven} alt="" />
                        <h5>NFT Driven<br />Shooter</h5>
                        <p>Equip an NFT skin to earn <span className="dollar-span">$</span><span className="warx-span">WARX</span> tokens for your performance and time spent in game.</p>
                    </div>
                    <div className="ThreeTypeSectionBox">
                        <img src={CryptoPowered} alt="" />
                        <h5>Crypto Powered<br /> P2E Ecosystem</h5>
                        <p>Earn as you kill and capture objectives in our pay-to-spawn Advance & Secure game mode.</p>
                    </div>
                    <div className="ThreeTypeSectionBox">
                        <img src={PlayEarnBet} alt="" />
                        <h5>Play. Earn.<br /> Bet.</h5>
                        <p>Bet in high-stakes competitive Team Deathmatch and Free-For-All matches.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeTypeNFT