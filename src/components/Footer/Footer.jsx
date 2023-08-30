import React from 'react'
import headTwitter from "../../assets/twitter.png";
import headYoutube from "../../assets/youtube.png";
import headSoo from "../../assets/so.png";
import headDiscord from "../../assets/discord.png";
import bitmap from "../../assets/Bitmap Copy 5.png";
import tikTok from "../../assets/37.png";

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="Footer">
                <div className="FooterCentered">
                    <div className="FooterLeftContainer">
                        <img src={bitmap} alt="" />
                        <div className="footer-ul">
                            <ul>
                                <li><a href="#">FEEDBACK</a></li>
                                <li><a href="#FAQ">FAQ</a></li>
                                <li><a href="#">PATCH NOTES</a></li>
                                <li><a href="#">WHITEPAPER</a></li>
                                <li><a href="#">MERCH</a></li>
                            </ul>

                            <ul className="footer-ul2">
                                <li className="footer-li2"><a className="footer-a2" href="#">Curfluffle Games</a></li>
                                <li className="footer-li2"><a className="footer-a2 footer_link" href="#">Terms of Service</a></li>
                                <li className="footer-li2 "><a className="footer-a2 footer_link" href="#">Privacy Policy</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="HeaderSocialIconContainer">
                        <ul>
                            <li><a href="https://discord.gg/worldwar0x" target="_blank"><img className="image-1156-icon" alt="" src={headDiscord} /></a></li>
                            <li><a href="https://twitter.com/WorldWar0x" target="_blank"><img className="image-1156-icon" alt="" src={headTwitter} /></a></li>
                            <li><a href="https://www.youtube.com/channel/UC4mQ9cT7wDV6aqOuoMaX3vA" target="_blank"><img className="image-1156-icon" alt="" src={headYoutube} /></a></li>
                            <li><a href="https://instagram.com/worldwar0x" target="_blank"><img className="image-1156-icon" alt="" src={headSoo} /></a></li>
                            <li><a href="https://www.tiktok.com/@worldwar0x" target="_blank"><img className="image-1156-icon" alt="" src={tikTok} /></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer