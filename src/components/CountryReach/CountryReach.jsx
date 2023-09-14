import React from 'react';
import './CountryReach.css';

const CountryReach = ({ img1, img2, img3, title, img4 }) => {
    return (
        <div>
            <div className="CountryReachConatiner-Flag">
                <img loading="lazy" src={img1} alt="" />
                <img loading="lazy" src={img2} alt="" />
                <img loading="lazy" src={img3} alt="" />
            </div>
            <h2>{title}</h2>
            <div className="CountryReachConatiner-img">
                <img loading="lazy" src={img4} alt="" />
            </div>
        </div>
    )
}

export default CountryReach