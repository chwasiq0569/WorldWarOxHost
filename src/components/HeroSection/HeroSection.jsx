import React from 'react';
import herologo from "../../assets/herologo.webp";
import gamePlay from '../../assets/Gameplay.mp4';
import './HeroSection.css';

const HeroSection = ({ moveToBack }) => {
    return (
        <div>
            <div className={moveToBack ? "HeroSectionContainer moveToBack" : "HeroSectionContainer"}>
                <video controls muted autoPlay loop className="video-container no-controls">
                    <source src={gamePlay} type="video/mp4" />
                </video>
                {/* <div style={{ padding: "56.25% 0 0 0", position: "relative" }}><iframe src="yer.vimeo.com/video/863883476?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} title="World War 0x Gameplay"></iframe></div> */}
                {/* <iframe className="video-container no-controls" src="https://player.vimeo.com/video/863883476?autoplay=1&background=1"
                    allow="autoplay; fullscreen;"
                    allowFullScreen
                    title="World War 0x Gameplay"
                    loading="lazy" frameBorder="0"
                ></iframe> */}
                {/* https://www.youtube.com/embed/g_jLmSOyeDM */}
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe
                            className="video-container no-controls"
                            src="https://player.vimeo.com/video/863883476?autoplay=1&background=1"
                            allow="autoplay; fullscreen;"
                            allowFullScreen
                            title="World War 0x Gameplay"
                            loading="lazy"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
                <div className="HeroCenteredContent">
                    <img className="" alt="" src={herologo} />
                    <h2>LOW POLY WORLD WAR 3 HAS ARRIVED</h2>
                    <h3>BROWSER-BASED MULTIPLAYER FPS WITH VEHICLES</h3>
                    <div className="HeroSectionBtns">
                        <a href="https://www.worldwar0x.io/" className="svg-clip-1" target="_blank" rel="noreferrer">PLAY ALPHA</a>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc7c1H_PDroVkPz5AztS6pLKLWjDTFerMNgHQiCO7nn1oL2Kg/viewform" className="svg-clip-2" target="_blank" rel="noreferrer">WHITELIST NOW</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection