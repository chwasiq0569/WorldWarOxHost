import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import Apple from "../../assets/apple.png"
import Windows from "../../assets/windows.png"
import WebBrowser from "../../assets/webbrowsericon.svg"
import GooglePlayIcon from "../../assets/googleplayicon.svg"
import IosComingSoonIcon from "../../assets/ioscomingsoonicon.svg"

import headTwitter from "../../assets/twitter.webp";
import headYoutube from "../../assets/youtube.webp";
import headSoo from "../../assets/so.webp";
import headDiscord from "../../assets/discord.webp";
import tikTok from "../../assets/tiktok.webp";

import "./Support.css"
import Header from '../../components/Header/Header';

const Support = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }
    React.useEffect(() => {
        scrollToTop()
    }, [])
    return (<>
        {/* <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} /> */}

        <Header />

        <div className='main_content'>
            <p className='page_head'>SUPPORT</p>
            {/* <div className='download_btns_container'>
                <a href="https://worldwar0x.io/patchsystem/ww0x01patchl1.zip">
                    <button className='white_btn'>
                        <img src={Windows} alt="windows_icon" />
                        <p>WINDOWS DOWNLOAD</p>
                    </button>
                </a>
                <button className='black_btn'>
                    <img src={Apple} alt="windows_icon" />
                    <p>MAC COMING SOON</p>
                </button>
            </div> */}
            <p className='primary_text'>hi@worldwar0x.com</p>
            <br />
            <br />
            <br />
            <div className="HeaderSocialIconContainer">
                <ul>
                    <li><a href="https://discord.gg/worldwar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headDiscord} /></a></li>
                    <li><a href="https://twitter.com/WorldWar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headTwitter} /></a></li>
                    <li><a href="https://www.youtube.com/channel/UC4mQ9cT7wDV6aqOuoMaX3vA" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headYoutube} /></a></li>
                    <li><a href="https://instagram.com/worldwar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={headSoo} /></a></li>
                    <li><a href="https://www.tiktok.com/@worldwar0x" target="_blank" rel="noreferrer"><img className="image-1156-icon" alt="" src={tikTok} /></a></li>
                </ul>
            </div>

            {/* <div className='specs_table'>
                <div className='table_header'>
                    <div className='table_col'>
                        SPECS
                    </div>
                    <div className='table_col'>
                        MINIMUM
                    </div>
                    <div className='table_col'>
                        RECOMMENDED
                    </div>
                </div>
                <div className='table_row'>
                    <div className='table_col'>
                        CPU
                    </div>
                    <div className='table_col'>
                        4 GB
                    </div>
                    <div className='table_col'>
                        6 GB
                    </div>
                </div>
                <div className='table_row'>
                    <div className='table_col'>
                        CPU
                    </div>
                    <div className='table_col'>
                        I5 / AMD RYZEN 5
                    </div>
                    <div className='table_col'>
                        I7 / AMD RYZEN 7
                    </div>
                </div>
                <div className='table_row'>
                    <div className='table_col'>
                        RAM
                    </div>
                    <div className='table_col'>
                        4 GB
                    </div>
                    <div className='table_col'>
                        6 GB
                    </div>
                </div>
                <div className='table_row'>
                    <div className='table_col'>
                        OS
                    </div>
                    <div className='table_col'>
                        WINDOWS 10
                    </div>
                    <div className='table_col'>
                        WINDOWS 11
                    </div>
                </div>
                <div className='table_row'>
                    <div className='table_col'>
                        HDD
                    </div>
                    <div className='table_col'>
                        20 GB
                    </div>
                    <div className='table_col'>
                        100 GB
                    </div>
                </div>
            </div> */}
        </div>
        <Footer />
    </>);
}

export default Support;