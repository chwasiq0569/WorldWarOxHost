import React from 'react';
import './BattleItOut.css'

const BattleItOut = ({ img, icon, title, invisible = false }) => {
    return (
        <div>
            <div className="BattleItOutBox">
                <img loading="lazy" src={img} className="landlarge-img" alt="" />
                <img loading="lazy" src={icon} className={invisible ? "invisibleContent landsmall-img" : "landsmall-img"} alt="" />
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default BattleItOut