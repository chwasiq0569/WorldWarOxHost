import React from 'react'
import './Header.css'
import NewLogo from '../../assets/newlogo.png'
import DiscordIcon from '../../assets/discord.png'
import XIcon from '../../assets/X_Icon.png'
import BurgerIcon from "../../assets/burger-menu.svg"
import CloseIcon from "../../assets/close_icon.png"
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

export default function Header() {
    const isSmallDevice = useMediaQuery({
        query: '(max-width: 1024px)'
    })
    const [menuOpened, setMenuOpened] = React.useState(false)


    return (<>
        <div className={menuOpened ? 'headerContainer' : 'headerContainer headerClosed'}>
            <div className='leftSide'>
                <Link style={{ all: "unset" }} to="/">
                    <img className='logo' src={NewLogo} alt='logo' />
                </Link>

                <ul className='navItems'>
                    <Link style={{ all: "unset" }} to="/download">
                        <li><a>DOWNLOAD</a></li>
                    </Link>
                    <li><a style={{ all: "unset" }} href="https://worldwar0x.io" rel="noreferrer" target='_blank'>PLAY</a></li>
                    <li><a style={{ all: "unset" }} href="https://truffle.wtf/project/world-war-0x-country" rel="noreferrer" target='_blank'>MINT</a></li>

                    {/* <li>DOWNLOAD</li> */}
                    {/* <li>PLAY</li> */}
                    <Link style={{ all: "unset" }} to="/collection">
                        <li><a>COLLECTIONS</a></li>
                    </Link>
                    {/* <li>COLLECTIONS</li> */}
                    <li>MARKETPLACE</li>
                    <li><a style={{ all: "unset" }} href='/atm' rel="noreferrer"
                        target="_blank">ATM</a></li>
                </ul>
            </div>
            <div className='rightSide'>
                <div className='socialIcons'>
                    <a style={{ all: "unset" }} href="https://discord.com/invite/worldwar0x" rel="noreferrer" target='_blank'>
                        <img src={DiscordIcon} alt='DiscordIcon' />
                    </a>
                    <a style={{ all: "unset" }} href="https://www.instagram.com/worldwar0x/" rel="noreferrer" target='_blank'>
                        <img src={XIcon} alt='XIcon' />
                    </a>
                </div>
                <button className='connectWalletBtn'>CONNECT WALLET</button>
            </div>

            {menuOpened && <img onClick={() => setMenuOpened(false)} className='close_icon' src={CloseIcon} alt='mobile_menu_icon' />}
        </div>
        {
            isSmallDevice && <div className='mobileMenu'>
                <img className='logo' src={NewLogo} alt='logo' />
                {!menuOpened && <img onClick={() => {
                    console.log('menuOpened', menuOpened)
                    setMenuOpened(true)
                }} className='burger_icon' src={BurgerIcon} alt='mobile_menu_icon' />}
            </div>
        }

    </>
    )
}
