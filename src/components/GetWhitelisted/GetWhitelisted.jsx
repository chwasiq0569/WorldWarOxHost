import React from 'react'
import './GetWhitelisted.css'

import WhiteListLeftSide from "../../assets/whitelistleftside.png"
import WhiteListRightSide from "../../assets/whitelistrightside.png"

export default function GetWhitelisted() {
    return (
        <div className='get_whitelisted'>
            <img src={WhiteListLeftSide} alt="soldier_image" />
            <div className='whitelistBtnContainer'>
                <p className='whitelistsectionhead'>SIGN UP FOR THE ALLOWLIST</p>
                <div style={{ backgroundColor: "transparent" }} className="GetWhiteListedBtn">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc7c1H_PDroVkPz5AztS6pLKLWjDTFerMNgHQiCO7nn1oL2Kg/viewform' target="_blank" rel="noreferrer"><span style={{ fontSize: "22px" }}>GET WHITELISTED</span></a>
                </div>
            </div>
            <img src={WhiteListRightSide} alt="soldier_image" />
        </div>
    )
}
