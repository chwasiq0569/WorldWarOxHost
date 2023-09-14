import React from 'react'
import headTwitter from "../../assets/twitter.webp";
import headYoutube from "../../assets/youtube.webp";
import headSoo from "../../assets/so.webp";
import headDiscord from "../../assets/discord.webp";
import bitmap from "../../assets/Bitmap Copy 5.webp";
import tikTok from "../../assets/tiktok.webp";

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="Footer">
                <div className="FooterCentered">
                    <div className="FooterLeftContainer">
                        <img loading="lazy" src={bitmap} alt="" />
                        <div className="footer-ul">
                            <ul>
                                <li><a href="https://worldwar0x.io" rel="noreferrer" target='_blank'>PLAY</a></li>
                                <li><a href="#FirstEdition">NFTS</a></li>
                                <li><a href="#NEWERA">GAMEPLAY</a></li>
                                <li><a href="#WARXECOSYSTEM">ECOSYSTEM</a></li>
                                <li><a href='https://world-war-0x.gitbook.io/white-paper/' rel="noreferrer" target="_blank">WHITEPAPER</a></li>
                            </ul>
                            <ul className="footer-ul2">
                                <li className="footer-li2"><button className="footer-a2">Curfluffle</button></li>
                                <li className="footer-li2"><button className="footer-a2 footer_link">Terms of Service</button></li>
                                <li className="footer-li2 "><button className="footer-a2 footer_link">Privacy Policy</button></li>
                            </ul>

                        </div>
                    </div>
                    <div className="HeaderSocialIconContainer">
                        <ul>
                            <li><a href="https://discord.gg/worldwar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headDiscord} /></a></li>
                            <li><a href="https://twitter.com/WorldWar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headTwitter} /></a></li>
                            <li><a href="https://www.youtube.com/channel/UC4mQ9cT7wDV6aqOuoMaX3vA" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headYoutube} /></a></li>
                            <li><a href="https://instagram.com/worldwar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headSoo} /></a></li>
                            <li><a href="https://www.tiktok.com/@worldwar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={tikTok} /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer