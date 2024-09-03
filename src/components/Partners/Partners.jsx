import React from 'react'
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Icon3 from "../../assets/icon3.png"
import Icon4 from "../../assets/icon4.png"
import Icon5 from "../../assets/icon5.png"
import Icon6 from "../../assets/icon6.png"
import "./Partners.css"

export default function Partners() {
    return (
        <div className='pertners_container'>
            <p>PARTNERS</p>
            <div className='icons_container'>
                <div className='row'>
                    <img src={Icon1} alt="icon" />
                    {/* <img src={Icon2} alt="icon" /> */}
                    <img src={Icon4} alt="icon" />

                    <img src={Icon3} alt="icon" />
                </div>
                {/* <div className='row'> */}
                {/* <img src={Icon4} alt="icon" /> */}
                {/* <img src={Icon5} alt="icon" /> */}
                {/* <img src={Icon6} alt="icon" /> */}
                {/* </div> */}

            </div>
        </div>
    )
}
