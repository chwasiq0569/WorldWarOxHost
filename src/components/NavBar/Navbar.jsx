import React, { useState } from 'react';
import logo from "../../assets/logo.webp";
import headTwitter from "../../assets/twitter.webp";
import headYoutube from "../../assets/youtube.webp";
import headSoo from "../../assets/so.webp";
import headDiscord from "../../assets/discord.webp";
import tikTok from "../../assets/tiktok.webp";
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = ({ setMoveToBack, moveToBack }) => {
    const menuRef = React.useRef();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setMoveToBack, moveToBack]);

    React.useEffect(() => {
        isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        if (moveToBack) {
            setTimeout(() => {
                setMoveToBack(isMenuOpen)
            }, 1000)
        } else {
            setMoveToBack(isMenuOpen)
        }

    }, [isMenuOpen, setMoveToBack, moveToBack])

    return (
        <div>
            <div className={`HeaderContainer ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className='HeaderLeftSideContainer'>
                    <div className="HeaderLogo">
                        <Link style={{ all: "unset" }} to="/">
                            <img className="image-1156-icon" alt="" src={logo} />
                        </Link>
                    </div>
                    <div className="HeaderMenuContainer">
                        <ul>
                            <li><a href="https://worldwar0x.io" rel="noreferrer" target='_blank'>PLAY</a></li>
                            <Link style={{ all: "unset" }} to="/download">
                                <li><a>DOWNLOAD</a></li>
                            </Link>
                            <li><a href="/mint">NFTS</a></li>
                            {/* <li><a href="#NEWERA">GAMEPLAY</a></li> */}
                            {/* <li><a href="#WARXECOSYSTEM">ECOSYSTEM</a></li> */}
                            {/*<li><a href='https://world-war-0x.gitbook.io/white-paper/' rel="noreferrer"*/}
                            {/*       target="_blank">WHITEPAPER</a></li>*/}
                            {/* <li><a href='https://world-war-0x.gitbook.io/white-paper/' rel="noreferrer" target="_blank">DOWNLOAD</a></li> */}
                            <li><a href='/atm' rel="noreferrer">ATM</a></li>
                            <li><a href='https://stake.smithii.io/worldwar0x' rel="noreferrer"
                                   target="_blank">STAKE</a></li>
                        </ul>
                    </div>
                </div>
                <div className="HeaderRightSideContainer">
                    <div className="HeaderSocialIconContainer">
                        <ul>
                            <li><a href="https://discord.gg/worldwar0x" target="_blank" rel="noreferrer"><img
                                className="image-1156-icon" alt="" src={headDiscord} /></a></li>
                            <li><a href="https://twitter.com/WorldWar0x" target="_blank" rel="noreferrer"><img
                                className="image-1156-icon" alt="" src={headTwitter} /></a></li>
                            <li><a href="https://www.youtube.com/channel/UC4mQ9cT7wDV6aqOuoMaX3vA" target="_blank"
                                   rel="noreferrer"><img className="image-1156-icon" alt="" src={headYoutube} /></a></li>
                            <li><a href="https://instagram.com/worldwar0x" target="_blank" rel="noreferrer"><img
                                className="image-1156-icon" alt="" src={headSoo} /></a></li>
                            <li><a href="https://www.tiktok.com/@worldwar0x" target="_blank" rel="noreferrer"><img
                                className="image-1156-icon" alt="" src={tikTok} /></a></li>
                        </ul>
                        {/* <button className="GetWhiteListedBtn">GET WHITELISTED</button> */}
                        <div className="GetWhiteListedBtn">
                            <a href='https://truffle.wtf/project/world-war-0x-battlewear' target="_blank"
                               rel="noreferrer"><span>MINT NOW</span></a>
                        </div>

                    </div>
                    <div className='humburgerConatiner' onClick={toggleMenu}>
                        <div className='humburgerLine'></div>
                        <div className='humburgerLine'></div>
                        <div className='humburgerLine'></div>
                    </div>
                    <div ref={menuRef} className={`SideMenu ${isMenuOpen ? 'menu-open' : ''}`}>
                        <div className="CloseButton" onClick={toggleMenu}>
                            <div className="CloseIcon"></div>
                            <div className="CloseIcon"></div>
                        </div>
                        <div className="HeaderLogo">
                            <Link style={{ all: "unset" }} to="/">
                                <img className="image-1156-icon" alt="" src={logo} />
                            </Link>
                        </div>
                        <ul>
                            <li onClick={toggleMenu}><a href="https://worldwar0x.io" rel="noreferrer"
                                                        target='_blank'>PLAY</a></li>
                            {/* <li onClick={toggleMenu}><a href="#NEWERA">GAMEPLAY</a></li> */}
                            {/* <li onClick={toggleMenu}><a href="#WARXECOSYSTEM">ECOSYSTEM</a></li> */}
                            {/* <li><a href='https://world-war-0x.gitbook.io/white-paper/' rel="noreferrer"
                                target="_blank">WHITEPAPER</a></li> */}
                            <Link style={{ all: "unset" }} to="/download">
                                <li><a>DOWNLOAD</a></li>
                            </Link>
                            <li onClick={toggleMenu}><a href="/mint">NFTS</a></li>
                            <li onClick={toggleMenu}><a href="/atm">ATM</a></li>
                            <li onClick={toggleMenu}><a href="https://stake.smithii.io/worldwar0x">STAKE</a></li>

                        </ul>
                        <div className="GetWhiteListedBtn small-btn">
                            <a href='https://truffle.wtf/project/world-war-0x-battlewear' target="_blank"
                               rel="noreferrer"><span>MINT NOW</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar