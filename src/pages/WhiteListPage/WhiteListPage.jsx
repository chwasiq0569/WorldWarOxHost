import React from 'react'
import './WhiteListPage.css';
import Accordion from '../../components/Accordion/Accordion'
// import NftSoldier from "../../assets/PolishjSodliercom--unscreen.gif";
// import NftSoldier from "../../assets/ezgif.com-video-to-gif.gif";
// import NftSoldier from "../../assets/UkraineNFTGIFF-unscreen.gif";
import NftSoldier from "../../assets/POL-UK.png";
import line from "../../assets/image 1153.png";
import cloud1 from "../../assets/cloud1.webp";
import cloudW from "../../assets/WCloud.webp";
import helicopter from "../../assets/helicopter.webp";
import cloud2 from "../../assets/cloud2.webp";
// import soldiers from "../../assets/war-nobg 1.png";
import soldiers2 from "../../assets/ww0x-Illustration.webp";
import worldLine from "../../assets/Group 1.png";
import land1 from "../../assets/groundtransport.webp";
import land2 from "../../assets/helicopertransport.webp";
import land3 from "../../assets/tanks.webp";
import land4 from "../../assets/naval.webp";
import land5 from "../../assets/fighterjet.webp";
import land6 from "../../assets/turrets.webp";
import landsmall1 from "../../assets/Group4.png";
import landsmall3 from "../../assets/land3.png";
import landsmall2 from "../../assets/land2.png";
import landsmall4 from "../../assets/land4.png";
import landsmall5 from "../../assets/land5.png";
import flag from "../../assets/flag.webp";
import flagSecureImg from "../../assets/jet2.webp";
import china from "../../assets/China.webp";
import sword from "../../assets/sword.webp";
import taiwan from "../../assets/Taiwan.webp";
// import taiwanSectionBigImg from "../../assets/image 1062.webp";
import taiwanSectionBigImg from "../../assets/TaiwanBeach.jpg";
import russia from "../../assets/Russia 3.png";
import ukraine from "../../assets/Ukraine 3.png";
// import ukraineSectionBigImg from "../../assets/image 1036.png";
import ukraineSectionBigImg from "../../assets/Bakhmut.jpg";
// import ukraine2SectionBigImg from "../../assets/image 1088.png";
// import ukraine2SectionBigImg from "../../assets/Odesa.webp";
import ukraine2SectionBigImg from "../../assets/OdesaPort.jpg";
// import PenghuIsland from "../../assets/Penghu.webp";
import PenghuIsland from "../../assets/PenguIslands.jpg";
import multipleLine from "../../assets/Group 3.png";
import ClassicsIcon from "../../assets/classicicon.webp";
// import squadsPuppet from "../../assets/Group 4.png";
// import squadsPuppet from "../../assets/squadpuppet.webp";
import squadsPuppet from "../../assets/GER.png";
import squadsLine from "../../assets/Rectangle 53.png";
import mobileVersionImg from "../../assets/mobile.webp";
import appStore from "../../assets/ComingSoonAppStore.png";
import googlePlay from "../../assets/ComingSoonGooglePlay.png";
import ecosystemImg from "../../assets/ecosystem.webp";
import ecosystemflower from "../../assets/ecosystemflower.webp";
import hand from "../../assets/hand.webp";
import group65 from "../../assets/coins.webp";
// import thesoldiersNFT from "../../assets/photo_2023-08-14_15-43-51 1.png";
// import thesoldiersNFT from "../../assets/usasolidergif.gif";
import thesoldiersNFT from "../../assets/GrayBeard-US.png";
import warx from "../../assets/WARXcoin.webp";
import bugs from "../../assets/bug.png";
import blueFlower from "../../assets/blueFlowers.webp";
import fractal from "../../assets/Fractal2 3.webp";
import Odyn from "../../assets/Logo - Odyn (2) 3.webp";
import blumint from "../../assets/blumint 3.webp";
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import ThreeTypeNFT from '../../components/ThreeTypeNFT/ThreeTypeNFT';
import BattleItOut from '../../components/BattleItOut/BattleItOut';
import CountryReach from '../../components/CountryReach/CountryReach';
import Carousel from '../../components/Carousel/Carousel';
import CarouselPuppet from '../../components/CarouselPuppet/CarouselPuppet';
import ArrowUp from "../../assets/arrowUp.png";
import WhiteListBG from "../../assets/whitelistbg.svg"
import NFTProfilePic from "../../assets/Nftprofile.png"
import WhiteListSoldier from "../../assets/whitelistsoldier.png"
import NFTHolder1 from "../../assets/nftholder1.png"
import NFTHolder2 from "../../assets/nftholder2.png"
import NFTHolder3 from "../../assets/nftholder3.png"
import PlayInBrowser from "../../assets/playinwebbrowser.png"
import WindowsDownload from "../../assets/windowsdownload.png"
import AvailableInAppStore from "../../assets/availableinappstore.png"
import GetItOnGooglePlay from "../../assets/getitongoogleplay.png"
import AvailableInSteam from "../../assets/availableonsteam.png"

import NFTType1 from "../../assets/nfttype1.png"
import NFTType2 from "../../assets/nfttype2.png"
import NFTType3 from "../../assets/nfttype3.png"

import CountryGroupCover from "../../assets/countrygroupcover.png"
import CountryGroupCollection from "../../assets/nfttypesgroup.png"
import HeadsSlideOne from "../../assets/headsslide1.png"
import sliderarrow from "../../assets/sliderarrow.png"

import innerTabsHelmet from "../../assets/doubletabshelmet.png"
import innerTabsHair from "../../assets/doubletabshair.png"
import innerTabsHat from "../../assets/doubletabshat.png"
import eyeWear from "../../assets/eyewear.png"
import faicialhair from "../../assets/faicialhair.png"
import masks from "../../assets/masks.png"

import topspluspantscover from "../../assets/tops+pantscover.png"
import designercover from "../../assets/designercover.png"
import topspluspantsgrid from "../../assets/tops+pantsgrid.png"

import designercollection1 from "../../assets/designercollection1.png"
import designercollection2 from "../../assets/designercollection2.png"
import designercollection3 from "../../assets/designercollection3.png"

import ReactPlayer from 'react-player'
import Platforms from '../../components/Platforms/Platforms';
import NFTHolder from '../../components/NFTHolder/NFTHolder';
import Header from '../../components/Header/Header';

const WhiteListPage = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    const [tab, setTab] = React.useState(1);

    const [outerTabs, setOuterTabs] = React.useState(1);
    const [innerTabs, setInnerTabs] = React.useState(1);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {isScrolled && <div onClick={scrollToTop} className='backToTop'>
                <img src={ArrowUp} alt='arrow_up' />
            </div>}
            {/* <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} /> */}
            <Header />

            <div className="herocontainer">
                <img className='whitelistbg' src={WhiteListBG} alt="white_list_img" />
                <img className='nftprofilepic' src={NFTProfilePic} alt="nft_profile_pic" />
            </div>

            <div className='whitelistpagehead'>
                <p>THE WORLD WAR 0X SOLDIER COLLECTION HAS ARRIVED</p>
                <img src={WhiteListSoldier} alt="white_list_soldier" />
            </div>

            <NFTHolder lefttext={"World War 0x is a play to earn low poly WW3 FPS. 300 NFTS will be minted in our Battlewear NFT collection. Holders use their NFTs in-game as 3D characters and gain access to betting features. "} />
            {/* <div className='nftholderssection'>
                <div className='leftside'>
                    <p>World War 0x is a play to earn low poly WW3 FPS. 2000 NFTS will be minted in our Soldier NFT collection. Holders use their NFTs in-game as 3D characters and gain access to betting features. </p>
                    <div className='nftholderreceiverbox'>
                        <p className='nftholdersreceiver'>NFT HOLDERS RECEIVE</p>
                        <div className='nftholders'>
                            <div className='nftholder'>
                                <img src={NFTHolder1} alt="nft_holder" />
                                <p>NFT IMAGE</p>
                            </div>
                            <div className='nftholder'>
                                <img src={NFTHolder2} alt="nft_holder" />
                                <p>NFTS PLAYABLE IN GAME</p>
                            </div>
                            <div className='nftholder'>
                                <img src={NFTHolder3} alt="nft_holder" />
                                <p>ACCESS TO BETTING</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightside'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=p191LCVjPPY' />
                </div>
            </div> */}

            <p className='whitelistsectionhead'>SIGN UP FOR THE ALLOWLIST</p>
            <div className='whitelistBtnContainer'>
                <div style={{ backgroundColor: "transparent" }} className="GetWhiteListedBtn">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSc7c1H_PDroVkPz5AztS6pLKLWjDTFerMNgHQiCO7nn1oL2Kg/viewform' target="_blank" rel="noreferrer"><span style={{ fontSize: "22px" }}>GET WHITELISTED</span></a>
                </div>
            </div>
            <Platforms />

            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='nfttypes'>
                <p className="nfttypeshead"> THE 300 BATTLEWEAR NFTS WILL BE RELEASED FIRST. COUNTY AND DESIGNER UNIFORMS WILL COME LATER:</p>
                <br />
                <br />

                <div className='nftscontainer'>
                    <div className='nft'><img src={NFTType1} alt="NFTType1" /><p>COUNTY UNIFORMS</p></div>
                    <div className='nft'><img src={NFTType2} alt="NFTType2" /><p>BATTLEWEAR</p></div>
                    <div className='nft'><img src={NFTType3} alt="NFTType3" /><p>DESIGNER UNIFORMS</p></div>
                </div>
                <br />

                <p className="nfttypesdetail"> Each include a different pose and an unique possible number of combinations featuring different trait categories like Faces, Masks, Headwear, Eyewear, Facial Hair, Armor and Backpacks.
                </p>
            </div>

            <div className='nftAttributesSection'>
                <div className='nftAttributesHead'>
                    <div onClick={() => setTab(1)} className={tab == 1 ? 'tab clickedTab' : 'tab'}>
                        BATTLEWEAR
                    </div>
                    <div onClick={() => setTab(2)} className={tab == 2 ? 'tab clickedTab' : 'tab'}>
                        COUNTRY
                    </div>
                    <div onClick={() => setTab(3)} className={tab == 3 ? 'tab clickedTab' : 'tab'}>
                        DESIGNER
                    </div>
                </div>
                <div className='tabContentContainer'>


                    {
                        tab == 1 ? <div className='countryTabContent'>
                            <div className='countryTabUpper'>
                                <div className='countryTabContentLeftSide'>
                                    <h1>BATTLEWEAR</h1>
                                    <p>BATTLEWEAR Combo NFTs allow for maximized customization and offer owners a chance to display their flair without any country flags. Base colors and a vast amount of country and designer camouflage </p>
                                </div>
                                <div className='countryTabContentRightSide'>
                                    <img src={topspluspantscover} alt="country_group_cover" />
                                </div>
                            </div>
                            <div className='countryTabLower'>
                                <img src={topspluspantsgrid} alt="country_group_collection" />
                            </div>
                        </div> : tab == 2 ? <div className='countryTabContent'>
                            <div className='countryTabUpper'>
                                <div className='countryTabContentLeftSide'>
                                    <h1>COUNTRY UNIFORMS</h1>
                                    <p>Authentic camouflage with matching top, pants and armor. Unique heads for most countries.</p>
                                </div>
                                <div className='countryTabContentRightSide'>
                                    <img src={CountryGroupCover} alt="country_group_cover" />
                                </div>
                            </div>
                            <div className='countryTabLower'>
                                <img src={CountryGroupCollection} alt="country_group_collection" />
                            </div>
                        </div> : tab == 3 && <div className='countryTabContent'>
                            <div className='countryTabUpper'>
                                <div className='countryTabContentLeftSide'>
                                    <h1>DESIGNER UNIFORM</h1>
                                    <p>Look to spice up the battlefield with designer camo uniforms.</p>
                                    <p>Designer uniforms come in two styles to allow for different types of customization and rarities: <strong>Base</strong> and <strong>Base</strong>.</p>
                                </div>
                                <div className='countryTabContentRightSide'>
                                    <img src={designercover} alt="country_group_cover" />
                                </div>
                            </div>
                            <div className='countryTabLower'>
                                <img src={designercollection1} alt="designercollection1" />

                                <p className='countryTabText'><strong>Base</strong> includes matching designer camo tops and pants with generative camo for armor and backpacks.</p>
                                <img src={designercollection2} alt="designercollection2" />

                                <p className='countryTabText'><strong>Full</strong> uniforms include fully matching armor and backpack camo.</p>
                                <img src={designercollection3} alt="designercollection3" />
                            </div>
                        </div>
                    }

                </div>
            </div>
            {/* heads section */}
            <br />
            <br />
            <br />
            <div className='headsSectionContainer'>
                <div className='headsSectionHead'>
                    <h1>HEADS</h1><p>31 unique heads,  each representing a different country. All headwear, eyewear and facial hair can be used on each head.</p>
                </div>
                <div className='headsSlider'>
                    <div className='arrow'>
                        <img src={sliderarrow} alt="slider_arrow" />
                    </div>
                    <div className='sliderContent'>
                        <img src={HeadsSlideOne} alt="heads_slide" />
                    </div>
                    <div className='arrow'>
                        <img src={sliderarrow} alt="slider_arrow" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className='doubleTabsContainer'>
                <div className='doubleTabs'>
                    <div onClick={() => setOuterTabs(1)} className={outerTabs == 1 ? 'tab clickedTab' : 'tab'}>
                        HEADWEAR
                    </div>
                    <div onClick={() => setOuterTabs(2)} className={outerTabs == 2 ? 'tab clickedTab' : 'tab'}>
                        EYEWEAR
                    </div>
                    <div onClick={() => setOuterTabs(3)} className={outerTabs == 3 ? 'tab clickedTab' : 'tab'}>
                        FACIAL HAIR
                    </div>
                    <div onClick={() => setOuterTabs(4)} className={outerTabs == 4 ? 'tab clickedTab' : 'tab'}>
                        MASKS
                    </div>
                </div>
                <div className='doubleTabContentContainer'>
                    {outerTabs == 1 ?
                        <>
                            <p>Our collection offers a vast amount of different types of headwear — including helmets, hairstyles, hats and berets. Totaling over 40 unique headwear, this is the collections most expansive trait category.</p>

                            <div className='innerTabsContainer'>
                                <div className='innerTabs'>
                                    <div onClick={() => setInnerTabs(1)} className={innerTabs == 1 ? 'tab clickedTab' : 'tab'}>
                                        HELMETS
                                    </div>
                                    <div onClick={() => setInnerTabs(2)} className={innerTabs == 2 ? 'tab clickedTab' : 'tab'}>
                                        HAIR
                                    </div>
                                    <div onClick={() => setInnerTabs(3)} className={innerTabs == 3 ? 'tab clickedTab' : 'tab'}>
                                        HATS
                                    </div>
                                </div>
                                <div className='innerTabContentContainer'>
                                    <img src={innerTabs == 1 ? innerTabsHelmet : innerTabs == 2 ? innerTabsHair : innerTabsHat} alt="helmets" />
                                </div>
                            </div>
                        </> :
                        outerTabs == 2 ? <>
                            <p>11 unique glasses and goggles are featured in the collection. From Wayfarers and Aviators to Battle and Night Vision Goggles, eyewear is a must have item being found in only 15% of the total NFTs.</p>
                            <div className='innerTabsContainer'>

                                <div className='innerTabContentContainer'>
                                    <img src={eyeWear} alt="helmets" />
                                </div>
                            </div>
                        </> : outerTabs == 3 ?
                            <>
                                <p>Over 20 unique facial hairs including a fun assortment of moustaches and beards like Sparrow, Ducktail and Friendly Mutton Chops. Colors include blonde, brown, black, red and grey.</p>

                                <div className='innerTabsContainer'>

                                    <div className='innerTabContentContainer'>
                                        <img src={faicialhair} alt="helmets" />
                                    </div>
                                </div>
                            </> : outerTabs == 4 ? <>
                                <p>31 unique masks are included featuring a wide assortment of gas masks, helmets and scarves. Each mask has various select camouflages. Masks fully cover the face and so do not include any headwear, eyewear and facial hair. </p>

                                <div className='innerTabsContainer'>
                                    <div className='innerTabContentContainer'>
                                        <img src={masks} alt="helmets" />
                                    </div>
                                </div>
                            </> : <></>
                    }
                </div>
            </div>
            <p className='whitelistsectionhead'>MINT NOW ON TRUFFLE</p>
            <div className='whitelistBtnContainer'>
                <div style={{ backgroundColor: "transparent" }} className="GetWhiteListedBtn">
                    <a href='https://truffle.wtf/project/world-war-0x-battlewear' target="_blank" rel="noreferrer"><span style={{ fontSize: "22px" }}>MINT NOW</span></a>
                </div>
            </div>

            <p className="lowheadline"><span>World War 0X</span> is a low poly multiplayer FPS set during a WW3 conflict, Choose from over 25 countries. Vehicles like tanks, helicopters, boats and armored cars help players get around quickly.</p>


            <Platforms />


            <br />
            <br />
            <br />

            <Footer />

        </div>
    )
}

export default WhiteListPage