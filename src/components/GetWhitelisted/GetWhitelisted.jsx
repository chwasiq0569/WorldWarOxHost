import React from 'react'
import './GetWhitelisted.css'

import WhiteListLeftSide from "../../assets/whitelistleftside.png"
import WhiteListRightSide from "../../assets/whitelistrightside.png"

export default function GetWhitelisted() {
    return (
        <div className='get_whitelisted'>
            <img src={WhiteListLeftSide} alt="soldier_image" />
            <div className='whitelistBtnContainer'>
                <p className='whitelistsectionhead'>MINT NOW ON TRUFFLE</p>
                <div style={{ backgroundColor: "transparent" }} className="GetWhiteListedBtn">
                    <a href='https://truffle.wtf/project/world-war-0x-battlewear' target="_blank" rel="noreferrer"><span style={{ fontSize: "22px" }}>MINT NOW</span></a>
                </div>
            </div>
            <img src={WhiteListRightSide} alt="soldier_image" />
        </div>
    )
}
