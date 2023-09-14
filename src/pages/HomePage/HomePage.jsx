import React from 'react'
import './HomePage.css';
import Accordion from '../../components/Accordion/Accordion'
// import NftSoldier from "../../assets/PolishjSodliercom--unscreen.gif";
// import NftSoldier from "../../assets/ezgif.com-video-to-gif.gif";
import NftSoldier from "../../assets/UkraineNFTGIFF-unscreen.gif";
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
import taiwanSectionBigImg from "../../assets/image 1062.webp";
import russia from "../../assets/Russia 3.png";
import ukraine from "../../assets/Ukraine 3.png";
// import ukraineSectionBigImg from "../../assets/image 1036.png";
import ukraineSectionBigImg from "../../assets/Bakhmut.webp";
// import ukraine2SectionBigImg from "../../assets/image 1088.png";
import ukraine2SectionBigImg from "../../assets/Odesa.webp";
import PenghuIsland from "../../assets/Penghu.webp";
import multipleLine from "../../assets/Group 3.png";
import ClassicsIcon from "../../assets/classicicon.webp";
// import squadsPuppet from "../../assets/Group 4.png";
import squadsPuppet from "../../assets/squadpuppet.webp";
import squadsLine from "../../assets/Rectangle 53.png";
import mobileVersionImg from "../../assets/mobile.webp";
import appStore from "../../assets/ComingSoonAppStore.png";
import googlePlay from "../../assets/ComingSoonGooglePlay.png";
import ecosystemImg from "../../assets/ecosystem.webp";
import ecosystemflower from "../../assets/ecosystemflower.webp";
import hand from "../../assets/hand.webp";
import group65 from "../../assets/coins.webp";
// import thesoldiersNFT from "../../assets/photo_2023-08-14_15-43-51 1.png";
import thesoldiersNFT from "../../assets/usasolidergif.gif";
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

const HomePage = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

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
        // Attach event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {isScrolled && <div onClick={scrollToTop} className='backToTop'>
                <img src={ArrowUp} alt='arrow_up' />
            </div>}
            <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} />
            <HeroSection moveToBack={moveToBack} />
            <div className="FirstEditionContainer" id='FirstEdition'>
                <div className="FirstEditionContainerCentered">
                    <div className="FirstEditionContainer-Text">
                        <h4>TRANCH #1</h4>
                        <h5>SOLDIER NFTs</h5>
                        <p>These are the most important collectibles in our ecosystem and where the most value will accrue. These are your hero characters. Play with them, bet with them and stake them for rewards.</p>
                        <div className="FirstEditionContainer-btn">
                            <div className="GetWhiteListedBtn FirstEditionBTN">
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSc7c1H_PDroVkPz5AztS6pLKLWjDTFerMNgHQiCO7nn1oL2Kg/viewform' target="_blank" rel="noreferrer"><span>GET WHITELISTED</span></a>
                            </div>
                            <div className='mintsContainer'>
                                <button>MINTS OCTOBER</button>
                                <img loading="lazy" src={line} alt="" />
                            </div>
                        </div>
                        {/* <div className="FirstEditionTrance-text">
                            <h4>Tranche #1 </h4>
                            <h5>Mints September 26</h5>
                            <img src={line} alt="" />
                        </div> */}
                    </div>
                    <div className="FirstEditionContainer-Img">
                        <img loading="lazy" src={NftSoldier} alt="" />
                    </div>
                </div>
            </div>

            <ThreeTypeNFT />

            <CarouselPuppet />

            <div className="ANewEraContainer" id='NEWERA'>
                <div className="ANewEraContainerCentered">
                    <div className="ANewEraContainer-img">
                        <img loading="lazy" src={cloud1} alt="" />
                        <img loading="lazy" src={cloudW} alt="" />
                        <img loading="lazy" src={helicopter} alt="" />
                    </div>
                    <div className="ANewEra-txt">
                        <h2>A NEW ERA</h2>
                        <img loading="lazy" src={cloud2} alt="" />
                    </div>
                    <p>World War 0x brings a <span className="red-span">fully-featured</span> FPS to the <span className="red-span">browser</span>, allowing anyone to play completely free.</p>
                </div>
                <div className="ANewEra-img">
                    <img loading="lazy" src={soldiers2} alt="" />
                </div>
            </div>

            <div className="TwoTypeSectionContainer">
                <div className="bold-line"></div>
                <div className="TwoTypeSectionContainerCentered">
                    <div className="TwoTypeSectionBox">
                        <h4>FREE-TO-PLAY FPS WHERE PLAYERS CAN SHOOT, SOCIALIZE, BET & BUILD.</h4>
                    </div>
                    <div className="TwoTypeSectionBox1">
                        <h4>A new era for <span className='boldText'>gaming, community & ownership. Earn</span> and <span className='boldText'>bet</span> WARX TOKENS while playing <span className='boldText'>competitive matches.</span> Build maps to earn extra <span className='boldText'>$WARX</span>.</h4>
                    </div>
                    <img loading="lazy" src={worldLine} className="worldLine" alt="" />
                </div>
            </div>

            <div className="BattleItOutContainer">
                <h5>BATTLE IT OUT IN SQUADS BY</h5>
                <h2>LAND, AIR AND SEA</h2>
                <div className="BattleItOutContainerCentered">
                    <BattleItOut img={land1} icon={landsmall1} title="GROUND TRANSPORTS" />
                    <BattleItOut img={land2} icon={landsmall3} title="HELICOPTERS" />
                    <BattleItOut img={land3} icon={landsmall2} title="TANKS" />
                    <BattleItOut img={land4} icon={landsmall4} title="NAVAL TRANSPORTS" />
                    <BattleItOut img={land5} icon={landsmall5} title="FIGHTER JETS" />
                    <BattleItOut img={land6} icon={landsmall1} invisible={true} title="TURRETS" />
                </div>
            </div>

            <div className="ABCDE-Container">
                <div className="ABCDE-ContainerCentered">
                    <div className="ABCDE-ContainerBox">
                        <span>A</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>B</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>C</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>D</span>
                    </div>
                    <div className="ABCDE-ContainerBox-dots">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="ABCDE-ContainerBox">
                        <span>E</span>
                    </div>
                </div>
            </div>

            <div className="FlagContainer">
                <div className="FlagCentered">
                    <div className="FlagBox">
                        <h2><span className="green-span">ADVANCE</span><br />&<span className="lightred-span">SECURE</span><br /><span className="white-span">GAME MODE</span></h2>
                        <img src={flag} alt="" />
                    </div>
                    <div className="FlagBox">
                        <h5>In Advance and Secure the objective for both teams is to <span>capture and hold Control Points (aka flags) in a preset order.</span></h5>
                    </div>
                </div>
                <div className="flogSecureContainer">
                    <div className="flogSecureBox">
                        <div className="flogSecureBoxInner">
                            <p>Capturing enemy flags penalizes the enemy team and rewards you with additional tickets. The team who first runs out of tickets will lose.</p>
                            <br />
                            <br />
                            <p>Teams of up to 10 players are pitted against each other in intense modern combat battlefields with all kinds of vehicles at their disposal. In this low poly environment, the flow of the game is dictated by the players.</p>
                        </div>
                    </div>
                    <div className="flogSecureBox">
                        <img loading="lazy" src={flagSecureImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="CountryReachConatiner">
                <CountryReach img1={china} img2={sword} img3={taiwan} img4={taiwanSectionBigImg} title="TAIWAN BEACH INVASION" />
                <CountryReach img1={russia} img2={sword} img3={ukraine} img4={ukraineSectionBigImg} title="BATTLE OF BAKHMUT" />
                <CountryReach img1={china} img2={sword} img3={taiwan} img4={PenghuIsland} title="PENGHU ISLANDS" />
                <CountryReach img1={russia} img2={sword} img3={ukraine} img4={ukraine2SectionBigImg} title="ODESA PORT" />
                <img src={multipleLine} className="multipleLine" alt="" />
            </div>

            <div className="ClassicsSectionContainer">
                <img loading="lazy" src={ClassicsIcon} alt="" />
                <h2>CLASSICS</h2>
                <p>Nostalgia, fan favorites — fast-paced beloved maps. After our Token Generation maps will be voted on by the DAO.</p>
                {/* <div className='classicsImgGridContainer'>
                    <div className='classicsImgGridBox'><img src={ClassicsImg1} alt="" /><h5>CONTAINERS</h5></div>
                    <div className='classicsImgGridBox'><img src={ClassicsImg2} alt="" /><h5>DUSTED</h5></div>
                    <div className='classicsImgGridBox'><img src={ClassicsImg3} alt="" /><h5>POOL PARTY</h5></div>
                </div> */}
            </div>
            <Carousel />


            <div className="SquadsSectionContainer">
                <div className="SquadsSectionContainer-Box">
                    <div className="SquadsSectionContainer-InnerBox">
                        <h3>SQUADS</h3>
                        <img loading="lazy" src={squadsLine} alt="" />
                        <p>Team up with friends in squads of up to five players.</p>
                    </div>

                    <div className="SquadsSectionContainer-InnerBox">
                        <h4>SQUAD & PROXIMITY</h4>
                        <h3>VOICE CHAT</h3>
                        <img loading="lazy" src={squadsLine} alt="" />
                        <p>Only members of your squad can listen and talk in Squad chat.</p>
                        <br />
                        <p>Proximity Voice Chat allows anyone to hear you based on your distance in-game to them.</p>
                    </div>

                </div>
                <div className="SquadsSectionContainer-Box">
                    <img loading="lazy" src={squadsPuppet} className="squadsPuppet" alt="" />
                </div>
            </div>

            <div className="MobileVersionContainer">

                <div className="MobileVersionContainerBox">
                    <img loading="lazy" src={mobileVersionImg} className="mobileVersionImg" alt="" />
                </div>

                <div className="MobileVersionContainerBox">
                    <h2>MOBILE VERSIONS</h2>
                    <p>World War 0x will soon be available on the go on iOS and Android devices.</p>
                    <div className="appstoreimg-box">
                        <img loading="lazy" src={appStore} alt="" />
                        <img loading="lazy" src={googlePlay} alt="" />
                    </div>
                </div>

            </div>

            <div className="EcoSystemContainer" id='WARXECOSYSTEM'>

                <div className="EcoSystemContainerBox">
                    <img loading="lazy" src={ecosystemflower} alt="" />
                    <h2>THE WARX<br /> ECOSYSTEM</h2>
                    <ul>
                        <li>Community</li>
                        <li className='bulletItem'>•</li>
                        <li>Gaming</li>
                        <li className='bulletItem'>•</li>
                        <li>Ownership</li>
                    </ul>
                    <p className="EcoSystem-p"><a href="https://worldwar0x.io" target="_blank" rel="noreferrer">World War 0x</a> is both free-to-play and play-to-earn. Anyone can play for free at WorldWar0x.io; however to access the play-to-earn competitive betting ecosystem players must have a Soldier NFT in their wallet —  either by owning or renting it.</p>
                    <div className="EcoSystem-textIcon">
                        <p>WARX will offer a robust renting system to allow owners to rent their NFTs out by the hour, day or week.</p>
                        <img loading="lazy" src={hand} alt="" />
                    </div>
                    <div className="EcoSystem-textIcon">
                        <p>Tokens have a variety of utilities:  exclusive NFTs, skins, betting, staking, DAO governance and more.</p>
                        <img loading="lazy" src={group65} alt="" />
                    </div>

                </div>

                <div className="EcoSystemContainerBox">
                    <img loading="lazy" src={ecosystemImg} alt="" />
                </div>

            </div>

            <div className="TheSoldiersNFTContainer">

                <div className="TheSoldiersNFTContainerCentered">
                    <div className="thesoldiersNFTBox">
                        <h2>THE SOLDIERS</h2>
                        <p>Tranche #1 of the Soldier NFTs will be minted September 30. These OG collectibles kick off the World War 0x ecosystem - boosting 3D files, in-game accessibility and integration into our betting protocol and  map creator tools.</p>
                    </div>

                    <div className="thesoldiersNFTBox">
                        <img loading="lazy" src={thesoldiersNFT} alt="" />
                    </div>
                </div>

            </div>

            <div className="WarxContainer">

                <div className="WarxContainerBox">
                    <img loading="lazy" src={warx} alt="" />
                </div>
                <div className="WarxContainerBox-2">
                    <div className="WarxContainerInnerBox">
                        <h2>$WARX</h2>
                        <p>The World War 0x ecosystem and game will be powered by the $WARX token. The $WARX Token is an ERC-20 Token integral to the experience being created by Curfluffle.</p>
                    </div>
                    <div className="WarxContainerInnerBox">
                        <div className="WarxContainerInnerBox-img-bugs">
                            <img loading="lazy" src={bugs} alt="" />
                            <img loading="lazy" src={bugs} alt="" />
                            <img loading="lazy" src={bugs} alt="" />
                        </div>
                        <p>There is a wide variety of ways that gamers, collectors and community members will be able to use and receive $WARX in the ecosystem. Through engagement in competitive gameplay, social activities, community rewards and through contribution to the creator economy.</p>
                    </div>
                </div>

            </div>

            <div className="BettingSectionContainer">
                <div className="BettingSectionContainerCentered">

                    <div className="BettingSectionContainerBox">
                        <div className="BettingSectionInnerBox">PAY TO SPAWN</div>
                        <div className="BettingSectionInnerBox">ESPORTS  BETTING </div>
                        <div className="BettingSectionInnerBox">PVP BETTING</div>
                        <div className="BettingSectionInnerBox">SKINS BETTING</div>
                        <img loading="lazy" src={blueFlower} alt="" />
                    </div>
                    <div className="BettingSectionContainerBox">
                        <h3>BETTING</h3>
                        <div className="blue-line-BETTING"></div>
                        <p>World War 0x will offer many ways to bet within our ecosystem.</p>
                    </div>

                </div>
            </div>

            <div className="RoadmapSectionContainer">
                <h2>ROADMAP</h2>
                <div className='RoadmapSectionContainer-flex'>
                    <div className="RoadmaplineContainer">
                        <div className="circle">
                            <div className="line top-line"></div>
                            <div className="line bottom-line"></div>
                        </div>
                        <div className="circle">
                            <div className="line top-line"></div>
                            <div className="line bottom-line"></div>
                        </div>
                        <div className="circle">
                            <div className="line top-line"></div>
                            <div className="line bottom-line"></div>
                        </div>
                    </div>

                    <div className="RoadMapTextConatiner">
                        <div className="RoadMapTextConatinerCentered">
                            <div className="RoadMapTextInnerBox">
                                <h4>Q4 <span className="orange-span">2023</span></h4>
                                <ul>
                                    <li>Soldier NFT Sale</li>
                                    <li>IOs & Android App</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q1 <span className="orange-span">2024</span></h4>
                                <ul>
                                    <li>Mumbai Testnet Beta Launch</li>
                                    <li>Audit</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q2 <span className="orange-span">2024</span></h4>
                                <ul>
                                    <li>Token Generation Event</li>
                                    <li>World War 0x Championships</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="PartnersSectionContainer">
                <h2>PARTNERS</h2>
                <div className="PartnersSectionContainerCentered">
                    <img loading="lazy" src={fractal} alt="" />
                    <img loading="lazy" src={Odyn} alt="" />
                    <img loading="lazy" src={blumint} alt="" />
                </div>
            </div>

            <div className="FAQsSectionContainer" id='FAQ'>
                <h2>FAQ</h2>
                <div className='FaqsSectionCentered'>
                    <Accordion
                        title="Is the game free?"
                        content="Yes, World War 0x is completely free and can be played at WorldWar0x.io!"
                    />
                    <Accordion
                        title="Do you have an app?"
                        content="We don’t currently have an app however we anticipate the launch of an iOS and Android app in Q1 2024!"
                    />
                    <Accordion
                        title="How To Whitelist?"
                        content={<p>To whitelist please sign up here: <a href='https://forms.gle/LuqgvZu8H6iu34KA7' className='yellowLink' rel="noreferrer" target="_blank">https://forms.gle/LuqgvZu8H6iu34KA7</a></p>}
                    />
                    <Accordion
                        title="Is the World War 0x token live?"
                        content="The World War 0x token generation event will be Q1/Q2 2024."
                    />
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default HomePage