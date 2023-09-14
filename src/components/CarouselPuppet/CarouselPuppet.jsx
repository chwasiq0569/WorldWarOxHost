import React from 'react';
import './CarouselPuppet.css';

import helmat from "../../assets/helmat.webp";
// import northPuppet from '../../assets/kim-removebg-preview 7.png';

// import kim from '../../assets/kim-removebg-preview 6.png';
// import kims from '../../assets/photo_2023-08-14_15-43-51 2.png';
// import kimss from '../../assets/kim-removebg-preview 7.png';
// import kimsss from '../../assets/low-poly-solderssss.png';
// import kimssss from '../../assets/image 1174.png';
import KinJongVideo from '../../assets/KimJongUn-unscreen.gif';
import USASoldierVideo from '../../assets/USA-soldier-unscreen.gif';
import PresidentOfChinaVideo from '../../assets/PresidentOfChina-unscreen.gif';
import arrow8 from '../../assets/Arrow 8.png'
import arrow7 from '../../assets/Arrow 7.png'
import USALowPolygonFlag from "../../assets/USAflagLowPoly.png"
import ChinaflagLowPolyFlag from "../../assets/ChinaflagLowPoly.png"
import BelarusFlagLowPolyFlag from "../../assets/BelarusFlagLowPoly.png"

const imageData = [
    { id: 1, src: KinJongVideo, alt: 'Image 1' },
    { id: 2, src: PresidentOfChinaVideo, alt: 'Image 2' },
    { id: 3, src: USASoldierVideo, alt: 'Image 3' },
    // { id: 4, src: kimsss, alt: 'Image 4' },
    // { id: 5, src: kimssss, alt: 'Image 5' },
];
const imageTexts = [
    "The days are gone forever when our enemies could blackmail us with nuclear bombs",
    "",
    "",
    // "Custom text for image 4 when our enemies could blackmail us with nuclear bombs",
    // "Custom text for image 5 when our enemies could blackmail us with nuclear bombs",
];


const imagePuppets = [
    KinJongVideo,
    USASoldierVideo,
    PresidentOfChinaVideo,
    // kims,
    // northPuppet,
];

const backgroundImg = [
    BelarusFlagLowPolyFlag,
    USALowPolygonFlag,
    ChinaflagLowPolyFlag
]

const MyCarousel = () => {
    const [items, setItems] = React.useState(imageData);
    const [selectedItem, setSelectedItem] = React.useState(Math.ceil(items.length / 2));
    const [selectedItemImg, setSelectedItemImg] = React.useState(Math.ceil(items.length / 2));
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [itemNumber, setItemNumber] = React.useState(1)

    const handleAnimation = () => {
        setIsAnimating(true);
        // Add a delay to remove the animation class after the animation is completed
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Adjust the delay time based on your animation duration
    };

    console.log('selectedItem', imageData[selectedItem])
    console.log('imagePuppets', imagePuppets)
    const shiftNext = () => {
        setItems(prevItems => {
            const copy = [...prevItems];
            const lastItem = copy.pop();
            copy.unshift(lastItem);
            setSelectedItem((selectedItem + 1) % copy.length);
            setSelectedItemImg((selectedItemImg + 1) % copy.length);
            return copy;
        });
        handleAnimation()
        setItemNumber(itemNumber => itemNumber < items.length ? itemNumber + 1 : 1)
    };

    const shiftPrev = () => {
        setItems(prevItems => {
            const copy = [...prevItems];
            const firstItem = copy.shift();
            copy.push(firstItem);
            setSelectedItem((selectedItem - 1 + copy.length) % copy.length);
            setSelectedItemImg((selectedItemImg - 1 + copy.length) % copy.length);
            return copy;
        });
        handleAnimation()
        setItemNumber(itemNumber => itemNumber > 1 ? itemNumber - 1 : items.length)
    };

    const imageTextsh3 = [
        <h1 style={{ backgroundImage: `url(${backgroundImg[selectedItem]})` }}>SUPREME LEADER OF <br /> NORTH KOREA</h1>,
        <h1 style={{ backgroundImage: `url(${backgroundImg[selectedItem]})` }}>United States Marine<br /> Corps Soldier</h1>,
        <h1 style={{ backgroundImage: `url(${backgroundImg[selectedItem]})` }}>President of <br />China</h1>,
    ];

    return (
        <div className="HelmetSectionContainer">
            <div className="HelmetSectionContainerCentered">
                <img src={helmat} alt="" />
                <h2>LEGENDARY <span className="level-span">1/1</span>  SOLDIERS</h2>
                <p>A select number of Soldier NFTs will feature one-of-one (1/1) characters with completely unique outfits. Explore a rich history of famous historical figures from all parts of the world – from Julius Caesar, Cleopatra to Genghis Khan and more.</p>
                <div className='HelmetSectionContainerIMG scrolling-text-container'>
                    {/* <h1 className={isAnimating ? 'fade_in_animation' : 'scrolling-text'}>{imageTextsh3[selectedItem]}</h1> */}
                    <marquee className={isAnimating ? 'fade_in_animation' : 'scrolling-text'}>{imageTextsh3[selectedItem]}</marquee>
                    <div className={isAnimating ? 'fade_up_animation' : 'puppetImage'}>
                        {/* <img src={imagePuppets[selectedItem]} alt="" /> */}
                        <img loading="lazy" src={imagePuppets[selectedItem]} alt="" />
                        {/* <video autoplay="autoplay">
                            <source src={imagePuppets[selectedItem]} type="video/mp4" />
                        </video> */}
                    </div>
                </div>
                {
                    imageTexts[selectedItem].length > 0 && <h5 className={isAnimating ? 'fade_in_animation' : ''}><span className="quotation">”</span>{imageTexts[selectedItem]}<span className="quotation">”</span></h5>
                }

                <div style={{ display: 'flex', alignItems: 'center' }} className='maindivcustom'>
                    <button disabled={isAnimating} onClick={shiftPrev} className="custom-button"><img src={arrow8} alt="" /></button>
                    {items.map((item, index) => (
                        <div key={item.id} className='custom-div'>
                            <img loading="lazy" src={items[index].src}
                                alt={item.alt}
                                className="custom-img"
                            />
                        </div>
                    ))}
                    <button disabled={isAnimating} onClick={shiftNext} className="custom-button"><img src={arrow7} alt="" /></button>
                </div>
                <p>{itemNumber}<span style={{ opacity: '0.7' }}> / {items.length}</span></p>
            </div>
        </div>
    );
}

export default MyCarousel;
