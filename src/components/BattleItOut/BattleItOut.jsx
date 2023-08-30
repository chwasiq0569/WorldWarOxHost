import React from 'react';
import './BattleItOut.css'

const BattleItOut = ({img, icon, title}) => {
    return (
        <div>
            <div className="BattleItOutBox">
                <img src={img} className="landlarge-img" alt="" />
                <img src={icon} className="landsmall-img" alt="" />
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default BattleItOut