import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import Apple from "../../assets/apple.png"
import Windows from "../../assets/windows.png"
import WebBrowser from "../../assets/webbrowsericon.svg"
import GooglePlayIcon from "../../assets/googleplayicon.svg"
import IosComingSoonIcon from "../../assets/ioscomingsoonicon.svg"
import AvailableInAppStore from "../../assets/availableinappstore.png"


import "./Download.css"

const Download = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }
    React.useEffect(() => {
        scrollToTop()
    }, [])
    return (<>
        <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} />
        <div className='main_content'>
            <p className='page_head'>DOWNLOADABLE PC VERSION</p>
            <div className='download_btns_container'>
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
            </div>
            <p className='primary_text'>MORE WAYS TO PLAY</p>
            <div className='download_btns_container'>
                <a href="https://www.worldwar0x.io/" target='_blank'><img className='landscape_images' src={WebBrowser} alt="play_in_web_browser" /></a>
                <a href="https://play.google.com/store/apps/details?id=com.CurfluffleGames.WorldWar0x&hl=en&gl=US" target='_blank'><img className='landscape_images' src={GooglePlayIcon} alt="google_play" /></a>

                <a href="https://apps.apple.com/us/app/world-war-0x/id6477559681?platform=iphone" target='_blank'><img className='landscape_images' src={AvailableInAppStore} alt="iso_coming_soon" /></a>
            </div>


            <div className='specs_table'>
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
            </div>
        </div>
        <Footer />
    </>);
}

export default Download;