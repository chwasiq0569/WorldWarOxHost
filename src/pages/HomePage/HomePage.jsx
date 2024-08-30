import React from 'react'
import './HomePage.css';
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
import land1 from "../../assets/groundtransport.png";
import land2 from "../../assets/Helicopter.png";
import land3 from "../../assets/Tank.png";
import land4 from "../../assets/Boat.png";
import land5 from "../../assets/FighterJet.png";
import land6 from "../../assets/Turret.png";
import landsmall1 from "../../assets/Group4.png";
import landsmall3 from "../../assets/land3.png";
import landsmall2 from "../../assets/land2.png";
import landsmall4 from "../../assets/land4.png";
import landsmall5 from "../../assets/land5.png";
import flag from "../../assets/flag.webp";
// import flagSecureImg from "../../assets/jet2.webp";
import flagSecureImg from "../../assets/advanceandsecure.png";
import china from "../../assets/China.webp";
import sword from "../../assets/sword.webp";
import taiwan from "../../assets/Taiwan.webp";
// import taiwanSectionBigImg from "../../assets/image 1062.webp";
import taiwanSectionBigImg from "../../assets/TaiwanIslands.png";
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
import warx from "../../assets/WARXcoin.png";
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

import Platforms from '../../components/Platforms/Platforms';
import GetWhitelisted from '../../components/GetWhitelisted/GetWhitelisted';
import NFTHolder from '../../components/NFTHolder/NFTHolder';
import SoldierNFTs from "../../assets/2000soldiernft.png"
import TraitCategories from '../../components/TraitCategories/TraitCategories';
import Partners from '../../components/Partners/Partners';
import WW3Token from '../../assets/ww3token.png'
import BDuckToken from '../../assets/bducktoken.png'
import RaydiumIcon from '../../assets/raydium.png'
import RaydiumIconBlack from '../../assets/raydiumBlack.png'
import OrcaIcon from '../../assets/orca.png'
import DexScreenerIcon from '../../assets/dexscreener.png'
import CollectionOne from '../../assets/collection1.png'
import CollectionTwo from '../../assets/collection2.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';

const HomePage = () => {
    const [moveToBack, setMoveToBack] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const navigate = useNavigate();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


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

    const [sliderItems, setSelected] = React.useState([
        {
            id: 0,
            icon: WW3Token,
            name: '$WW3',
            token_name: 'World War 0x',
            token_type: 'UTILITY TOKEN ',
            contract_address: 'm627ycv849McoA1G6taMDu2MVBXxkwJG5P9VTmtNXV5',
            current_supply: '60522162',
            display_current_supply: '60,522,162',
            max_supply: '490000000',
            display_max_supply: '490,000,000',
            lp_providers: [
                {
                    icon: RaydiumIconBlack,
                    text: 'BUY ON RAYDIUM',
                    link: 'https://raydium.io/swap/?inputMint=sol&outputMint=m627ycv849McoA1G6taMDu2MVBXxkwJG5P9VTmtNXV5'
                }, {
                    icon: DexScreenerIcon,
                    text: 'DEXSCREENER',
                    link: 'https://dexscreener.com/solana/m627ycv849McoA1G6taMDu2MVBXxkwJG5P9VTmtNXV5'
                }
            ],
            link: 'https://solana.fm/address/m627ycv849McoA1G6taMDu2MVBXxkwJG5P9VTmtNXV5?cluster=mainnet-alpha'
        },
        {
            id: 1,
            icon: BDuckToken,
            name: '$BDUCK',
            token_name: 'Boomer DUCK',
            token_type: 'MEME TOKEN',
            contract_address: 'DSZ5kQWck86XaKgD1b2GZDNEpvtjaMKvkKBa6uY3cszd',
            max_supply: '69420000000',
            display_current_supply: '69,420,000,000',
            current_supply: '69420000000',
            display_max_supply: '69,420,000,000',
            lp_providers: [
                {
                    icon: RaydiumIconBlack,
                    text: 'BUY ON RAYDIUM',
                    link: 'https://raydium.io/swap?outputCurrency=DSZ5kQWck86XaKgD1b2GZDNEpvtjaMKvkKBa6uY3cszd'
                },
                {
                    icon: OrcaIcon,
                    text: 'BUY ON ORCA',
                    link: 'https://v1.orca.so/liquidity/browse?tokenMint=DSZ5kQWck86XaKgD1b2GZDNEpvtjaMKvkKBa6uY3cszd'
                },
                {
                    icon: DexScreenerIcon,
                    text: 'DEXSCREENER',
                    link: 'https://dexscreener.com/solana/DSZ5kQWck86XaKgD1b2GZDNEpvtjaMKvkKBa6uY3cszd'
                }
            ],
            link: 'https://solana.fm/address/DSZ5kQWck86XaKgD1b2GZDNEpvtjaMKvkKBa6uY3cszd?cluster=mainnet-alpha'
        },
    ]);

    return (
        <div>
            {isScrolled && <div onClick={scrollToTop} className='backToTop'>
                <img src={ArrowUp} alt='arrow_up' />
            </div>}
            <Header />
            {/* <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} /> */}
            <HeroSection moveToBack={moveToBack} />
            <div className="tokensSlider">
                <Slider {...settings}>
                    {
                        sliderItems.map(item => <div key={item.id} className="sliderItem">
                            <div className="upper">
                                <div className="leftSide">
                                    <img src={item.icon} alt="token" />
                                </div>
                                <div className="rightSide">
                                    <div className="tokenDetails">
                                        <p className='tokenSignature'>{item.name}</p> <div className='nameAndType'>
                                            <p className='tokenName'>{item.token_name}</p>
                                            <p className='tokenType'>{item.token_type}</p>
                                        </div>
                                    </div>
                                    <div className='contractAddress'>
                                        <p>CONTRACT ADDRESS</p>
                                        <a href={item.link} target='_blank' className='address'>{item.contract_address}</a>
                                    </div>
                                    <div className='circulatingSupply'>
                                        <div className='row textBold'>
                                            <p>CIRCULATING SUPPLY</p>
                                            <p>MAX SUPPLY</p>
                                        </div>
                                        <progress className="supply" value={item.current_supply} max={item.max_supply}></progress>
                                        <div className='row textBig'>
                                            <p>{item.display_current_supply}</p>
                                            <p>{item.display_max_supply}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower">
                                <div className='leftSide'>
                                    <p className='providersText'>LP PROVIDERS</p>
                                </div>
                                <div className='rightSide'>
                                    <div className='buttons'>
                                        {
                                            item.lp_providers.map(btn => <a href={btn.link} key={btn.link} target='_blank'>
                                                <img src={btn.icon} alt="btn" />
                                                <p>{btn.text}</p>
                                            </a>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>

                <div className='collectEarnBet'>
                    <div className="upper">
                        <p>Collect, earn and bet with a soldier NFT</p>
                    </div>
                    <div className="lower">
                        <div className='left'>
                            <p className='collectionhead'>BATTLEWEAR</p>
                            <p className='mintedOut'>MINTED OUT</p>
                            <button className='viewNftBtn'>VIEW NFTS</button>
                        </div>
                        <div className='middle'>
                            <img src={CollectionOne} alt='collection' />
                            <img src={CollectionTwo} alt='collection' />
                        </div>
                        <div className='right'>
                            <p className='collectionhead'>COUNTRY</p>
                            <p className='mint'>MINT</p>
                            <button className='viewNftBtn'>VIEW NFTS</button>
                        </div>
                    </div>
                </div>
            </div>

            <Platforms />
            <GetWhitelisted />

            <NFTHolder headtext={"THE WORLD WAR 0X SOLDIER COLLECTION HAS ARRIVED"} lefttext={"Holders use their NFTs in-game as 3D characters and gain access to betting features."} />

            <div className="FirstEditionContainer" id='FirstEdition'>
                <div className="FirstEditionContainerCentered">
                    <div className="FirstEditionContainer-Img">
                        <img loading="lazy" src={SoldierNFTs} alt="" />
                    </div>
                    <div className="FirstEditionContainer-Text">
                        <h4>COUNTRY</h4>
                        <h5>500 COUNTRY NFTS</h5>
                        {/* <p>These are the most important collectibles in our ecosystem and where the most value will accrue. These are your hero characters. Play with them, bet with them and stake them for rewards.</p> */}
                        <div className="FirstEditionContainer-btn">
                            <div className="GetWhiteListedBtn FirstEditionBTN">
                                <a href='https://truffle.wtf/project/world-war-0x-battlewear' target="_blank" rel="noreferrer"><span>MINT NOW</span></a>
                            </div>
                            {/* <div className='mintsContainer'>
                                <button>MINTS MARCH</button>
                                <img loading="lazy" src={line} alt="" />
                            </div> */}
                        </div>
                        {/* <div className="FirstEditionTrance-text">
                            <h4>Tranche #1 </h4>
                            <h5>Mints September 26</h5>
                            <img src={line} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>

            <ThreeTypeNFT />
            <TraitCategories />

            <Partners />
            {/* <CarouselPuppet /> */}

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
                        <h4>A new era for <span className='boldText'>gaming, community & ownership. Earn</span> and <span className='boldText'>bet</span> WARX TOKENS while playing <span className='boldText'>competitive matches.</span> Build maps to earn extra <span className='boldText'>$WW3</span>.</h4>
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
                <CountryReach img1={china} img2={sword} img3={taiwan} img4={taiwanSectionBigImg} title="PENGHU ISLANDS" />
                <CountryReach img1={russia} img2={sword} img3={ukraine} img4={ukraineSectionBigImg} title="DONBAS WOODS" />
                {/* <CountryReach img1={china} img2={sword} img3={taiwan} img4={PenghuIsland} title="TAIWAN BEACH" /> */}
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

            {/* <div className="MobileVersionContainer">

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

            </div> */}

            <div className="EcoSystemContainer" id='WARXECOSYSTEM'>

                <div className="EcoSystemContainerBox">
                    <img loading="lazy" src={ecosystemflower} alt="" />
                    <h2>THE $WW3<br /> ECOSYSTEM</h2>
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
                        <p>Battlewear NFTs are now minting. These OG collectibles kick off the World War 0x ecosystem - boosting 3D files, in-game accessibility and integration into our betting protocol and  map creator tools.</p>
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
                        <h2>$WW3</h2>
                        <p>The World War 0x ecosystem and game will be powered by the $WW3 token. The $WW3 Token is an ERC-20 Token integral to the experience being created by Curfluffle.</p>
                    </div>
                    <div className="WarxContainerInnerBox">
                        <div className="WarxContainerInnerBox-img-bugs">
                            <img loading="lazy" src={bugs} alt="" />
                            <img loading="lazy" src={bugs} alt="" />
                            <img loading="lazy" src={bugs} alt="" />
                        </div>
                        <p>There is a wide variety of ways that gamers, collectors and community members will be able to use and receive $WW3 in the ecosystem. Through engagement in competitive gameplay, social activities, community rewards and through contribution to the creator economy.</p>
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
                        <div className="circle">
                            <div className="line top-line"></div>
                            <div className="line bottom-line"></div>
                        </div>
                    </div>

                    <div className="RoadMapTextConatiner">
                        <div className="RoadMapTextConatinerCentered">


                            <div className="RoadMapTextInnerBox">
                                <h4>Q3 <span className="orange-span">2024</span></h4>
                                <ul>
                                    {/* <li>1v1, duos and squad betting</li>
                                    <li>Viewer betting</li>
                                    <li>Womens NFT Collection</li>
                                    <li>Crypto Conquest Game Mode</li>
                                    <li>Medic Class</li>
                                    <li>Mac Download version</li>
                                    <li>2D & 3D animated shorts featuring NFTs</li>
                                    <li>Spotting and other class specific features</li>
                                    <li>8 more maps featuring real WW3 battle locations</li>
                                    <li>Complete Teller ATMs integration</li>
                                    <li>NFT AI personalities beta</li> */}


                                    <li>$WW3 TGE</li>
                                    <li>$WW3 DEX, CEX Listings</li>
                                    <li>Rent NFTs, Stake NFTs</li>
                                    <li>Stake $WW3 and $BDUCK</li>
                                    <li>$BDUCK CEX Listing</li>
                                    <li>Entirely new UI</li>
                                    <li>Proximity Chat</li>
                                    <li>Earning Expanded (revives, captures, etc.)</li>
                                    <li>Initial betting alpha</li>
                                    <li>Drag players</li>
                                    <li>8 more maps featuring real WW3 battle locations</li>
                                    <li>Initial Teller ATM integration</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q4 <span className="orange-span">2024</span></h4>
                                <ul>
                                    {/* <li>All new audio including authentic gun sounds</li>
                                    <li>Weapon NFTs featuring authentic WW3 weapons</li>
                                    <li>New game mode Frontlines featuring dynamic spawns and capture points</li>
                                    <li>PS5 and Xbox Series X releases</li>
                                    <li>8 more maps featuring real WW3 battle locations</li>
                                    <li>NFT AI personalities public launch</li> */}

                                    <li>1v1, duos and squad betting</li>
                                    <li>Viewer betting</li>
                                    <li>Womens NFT Collection</li>
                                    <li>Crypto Conquest Game Mode</li>
                                    <li>Medic Class</li>
                                    <li>Mac Download version</li>
                                    <li>2D & 3D animated shorts featuring NFTs</li>
                                    <li>Spotting and other class specific features</li>
                                    <li>8 more maps featuring real WW3 battle locations</li>
                                    <li>Complete Teller ATMs integration</li>
                                    <li>NFT AI personalities beta</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q1 <span className="orange-span">2025</span></h4>
                                <ul>
                                    {/* <li>$WW3 TGE</li>
                                    <li>$WW3 DEX, CEX Listings</li>
                                    <li>Rent NFTs, Stake NFTs</li>
                                    <li>Stake $WW3 and $BDUCK</li>
                                    <li>$BDUCK CEX Listing</li>
                                    <li>Entirely new UI</li>
                                    <li>Proximity Chat</li>
                                    <li>Earning Expanded (revives, captures, etc.)</li>
                                    <li>Initial betting alpha</li>
                                    <li>Drag players</li>
                                    <li>8 more maps featuring real WW3 battle locations</li>
                                    <li>Initial Teller ATM integration</li> */}
                                    <li>All new audio including authentic gun sounds</li>
                                    <li>Weapon NFTs featuring authentic WW3 weapons</li>
                                    <li>New game mode Frontlines featuring dynamic spawns and capture points</li>
                                    <li>PS5 and Xbox Series X releases</li>
                                    <li>8 more maps featuring real WW3 battle locations</li>
                                    <li>NFT AI personalities public launch</li>
                                </ul>
                            </div>
                            <div className="RoadMapTextInnerBox">
                                <h4>Q2 <span className="orange-span">2025</span></h4>
                                <ul>
                                    <li>Vehicle NFTs featuring authentic WW3 vehicles (tanks, helicopters, -boats, armored cars)</li>
                                    <li>Land NFTs</li>
                                    <li>Extraction Game Mode (solo, duo and squad)</li>
                                    <li>Press Class (be a wartime photographer)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="PartnersSectionContainer">
                <h2>PARTNERS</h2>
                <div className="PartnersSectionContainerCentered">
                    <img loading="lazy" src={fractal} alt="" />
                    <img loading="lazy" src={Odyn} alt="" />
                    <img loading="lazy" src={blumint} alt="" />
                </div>
            </div> */}

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