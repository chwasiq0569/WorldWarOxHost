import React from 'react'
import BattlewearIcon from "../../assets/collection-icons/battlewear.png"
import CountryIcon from "../../assets/collection-icons/country.jpg"
import oldIcon from "../../assets/collection-icons/old.png"
import WomenIcon from "../../assets/collection-icons/women.png"
import { useMediaQuery } from 'react-responsive'
import CollectionICON from "../../assets/collectioni-icon.png"
import './Collection.css'
import Header from '../../components/Header/Header'
import FavaouritesIcon from "../../assets/favourites.png"
import Allnfts from "../../assets/allnfts.png"
import Forsale from "../../assets/forsale.png"
import MultiRangeSlider from '../../components/MultiRangeSlider/MultiRangeSlider'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NFT1 from '../../assets/collection/1.png'
import NFT2 from '../../assets/collection/2.png'
import NFT3 from '../../assets/collection/3.png'
import DiamondIcon from '../../assets/diamond.svg'
import SolanaIcon from '../../assets/solana.svg'
import { Link, useNavigate } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown'
import TraitsFilter from '../../components/TraitsFilter/TraitsFilter'

export default function Collection() {

    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(true);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 760px)' })

    const [allNft, setAllNft] = React.useState(false)
    const [forSale, setForSale] = React.useState(false)
    const [favourites, setFavourites] = React.useState(false)

    const [selectedFilter, setSelectedFilter] = React.useState([])
    // 
    // Dropdown States
    const [filteredList, setFilteredList] = React.useState(false);

    const [switcheStatus, setSwitcheStatus] = React.useState([]);
    // ended

    const [sliderItems, setSliderItems] = React.useState([
        {
            id: 0,
            img: BattlewearIcon,
            text: "battlewear",
            selected: false
        },
        {
            id: 1,
            img: CountryIcon,
            text: "country",
            selected: true
        }
    ]);

    const [selected, setSelected] = React.useState(sliderItems[1]);

    const selectionFunctions = (id) => {
        let items = [...sliderItems]

        items.map(item => {
            id === item.id ? item.selected = true : item.selected = false
        })

        console.log(items)
        setSliderItems([...items])
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 1 : isTabletOrMobile ? 2 : 2,
        // slidesToShow: isSmallScreen ? 1 : isTabletOrMobile ? 3 : 4,
        slidesToScroll: 1,
    };

    const [traitSlider, setTraitSlider] = React.useState(0);

    const onTraitSlide = (event) => {
        setTraitSlider(event.target.value);
        filterTraits(event.target.value)
    }

    const [nfts, setNFTs] = React.useState([])
    const [filteredNFTs, setFilteredNFTs] = React.useState([...nfts])

    React.useEffect(() => {
        setLoading(true)
        fetch('https://www.worldwar0x.io/play/ww0x/api.php?nft=battlewear').then(data => data.json()).then(data => {
            setLoading(false)
            setNFTs(Object.values(data))
            setFilteredNFTs(Object.values(data))
        })

        // let newArr = 
    }, [])

    console.log('KEYKEY', nfts);

    // nfts && console.log('NEWARR', nfts.filter(nft => nft.attributes.length < 8))

    const filterTraits = (val) => {
        setLoading(true)
        // console.log("VALL", typeof (parseInt(val)))
        console.log(`SLIDER|${val}`, nfts.filter(nft => nft?.attributes.length == val))
        setFilteredNFTs(nfts.filter(nft => nft?.attributes.length == val))
        setLoading(false)
        // const filteredObject = {};
        // for (const key in nfts) {
        //     if (nfts[key].attributes.length < 5) {
        //         filteredObject[key] = nfts[key];
        //     }
        // }
        // traitSlider > 0 && setNFTs(filteredObject)
        // setLoading(false)
        // console.log('filteredObject', filteredObject)
        // console.log('traitSlideCaned')
        // new Set(array)
        // console.log()
    }
    console.log('filteredObject', filteredNFTs)
    // React.useEffect(() => {
    //     filterTraits()
    //     console.log('traitSlideCaned')
    // }, [traitSlider])

    // let newArr = [...nfts.map(nft => nft?.attributes)]
    // let myArr = [...newArr.map(item => item.filter(i => i['trait_type'] === 'Background')[0]?.value)]
    // console.log('2122', nfts.map(nft => nft?.attributes).map(item => item.filter(i => i['trait_type'] === 'Background')[0]?.value))
    // console.log('2122', new Set(nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === 'Background')[0]?.value)))
    // console.log('2122', new Set(myArr.map(item => item?.value)))
    // console.log('traitSlider', traitSlider)

    const getTraitCount = (trait) => {
        // console.log('NFTS', nfts)
        // console.log("FILTERED", nfts.filter(nft => nft.attributes.filter(item => item.value == "Red")))
        // nfts.forEach(nft => nft.attributes.forEach(item => {
        //     item.value == 'Red' && tempArr.push(nft)
        // }))

        // nfts.filter(nft => nft.attributes.forEach(item => item.value == 'red'))

        // nfts.forEach(nft => nft.attributes.filter(item => item.value == 'Red')))

        // console.log('TraitS', nfts.filter(nft => nft.attributes.forEach(item => item.value == 'red')))
        // nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === trait)[0]?.value)

        console.log('XWS', nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === trait)[0]?.value))
        return new Set(nfts.map(nft => nft?.attributes.filter(i => i['trait_type'] === trait)[0]?.value))
    }


    return (
        <div className='collectionScreenContainer'>
            <Header />
            <div className="collection-slider">
                <Slider {...settings}>
                    {
                        sliderItems.map(item => <div key={item.id} onClick={() => {
                            setSelected(item)
                            selectionFunctions(item.id)
                        }} className={item.selected ? "slider-item selected-slider mt-4" : "slider-item mt-4"}>
                            <img src={item.img} />
                            <p>{item.text}</p>
                        </div>)
                    }
                </Slider>

            </div>
            <div className="collection-cover">
                <div className="row">
                    <div className="nftdetails">
                        <img className="collection-avatar" src={selected.img} alt="battlewear_tokens" />
                        <div className="details">
                            <p className="collection-name">{selected.text}</p>
                            <div className="collection"><img src={CollectionICON} alt="collection-icons" /><p>SOLDIER COLLECTION</p></div>
                        </div>
                    </div>
                    <div className="nft-rates">
                        <div>
                            {/* <p className="price">2.00</p> */}
                            {/* <p className="action-text">BUY NOW</p> */}
                        </div>
                        <div>
                            {/* <p className="price">1.50</p> */}
                            {/* <p className="action-text">SELL NOW</p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        {/* <p className="value">350/4,418 (7.83%)</p> */}
                        {/* <p className="label">LISTED/SUPPLY</p> */}
                    </div>
                    <div>
                        {/* <p className="value">32</p> */}
                        {/* <p className="label">VOLUME (24H)</p> */}
                    </div>
                    <div>
                        {/* <p className="value">163,942</p> */}
                        {/* <p className="label">VOLUME (ALL)</p> */}
                    </div>
                    <div>
                        {/* <p className="value">6</p> */}
                        {/* <p className="label">SALES (24H)</p> */}
                    </div>
                    <div>
                        {/* <p className="value">-19.25%</p> */}
                        {/* <p className="label">PRICE Δ (24H)</p> */}
                    </div>
                </div>
            </div>
            <div className='collectionsContainer'>
                <div className='leftSide'>
                    <div className='filter'>
                        <p className='filterHead'>FILTER</p>
                        <div className='filterByChoice'>
                            <div onClick={() => setAllNft(!allNft)} className={allNft ? "selection selected" : "selection"}>
                                <img src={Allnfts} alt='allnfts' />
                                <p>ALL NFTS</p>
                            </div>
                            <div onClick={() => setForSale(!forSale)} className={forSale ? "selection selected" : "selection"}>
                                <img src={Forsale} alt='allnfts' />
                                <p>FOR SALE</p>
                            </div>
                            <div onClick={() => setFavourites(!favourites)} className={favourites ? "selection selected" : "selection"}>
                                <img src={FavaouritesIcon} alt='allnfts' />
                                <p>FAVOURITES</p>
                            </div>
                        </div>
                        <br />
                        <p className="filterHead fade">PRICE</p>
                        <MultiRangeSlider />
                        <br />
                        <br />
                        <p className="filterHead fade">RARITY</p>
                        <MultiRangeSlider />
                        <br />
                        <br />


                        <div className="rarity-tags">
                            <span className="tag-BA8AFF">LEGENDARY (5%)</span>
                            <span className="tag-FF8AAD">RARE (25%)</span>
                            <span className="tag-8EE3FB">UNCOMMON (50%)</span>
                            <span className="tag-BFC4CA">COMMON (100%)</span>
                        </div>

                        <br />
                        <br />
                        <p className="filterHead fade">TRAIT COUNT</p>
                        <input type="range" min="0" max="9" onChange={onTraitSlide} value={traitSlider} className="trait-slider" id="myRange" />
                        <div className="trait-slider-values">
                            <span>0</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                        </div>
                        {
                            loading ? <ClipLoader
                                color='#ffffff'
                                loading={true}
                                size={75}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /> : <div className='traitsCategories'>
                                <br />
                                <br />
                                {/* <CustomDropdown head='Armour' list={getTraitCount('Armour')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='Background' list={getTraitCount('Background')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='Bags' list={getTraitCount('Bags')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='FacialHair' list={getTraitCount('FacialHair')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='Heads' list={getTraitCount('Heads')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='Headwear' list={getTraitCount('Headwear')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='Pants' list={getTraitCount('Pants')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} />
                                <CustomDropdown head='Tops' list={getTraitCount('Tops')} setSelectedFilter={setSelectedFilter}
                                    filteredList={filteredList}
                                    setFilteredList={setFilteredList}
                                    switcheStatus={switcheStatus}
                                    setSwitcheStatus={setSwitcheStatus} /> */}
                                <TraitsFilter nfts={nfts} setFilteredNFTs={setFilteredNFTs} />
                            </div>
                        }

                    </div>
                </div>
                <div className='rightSide'>
                    <div className='nftsCollection'>
                        {
                            filteredNFTs.map((nft) => {
                                return (
                                    loading ? <ClipLoader
                                        color='#ffffff'
                                        loading={true}
                                        size={150}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    /> : <div onClick={() => navigate('/viewnft', { state: { 'data': nft } })} key={nft?.name} className='individualNFT'>
                                        <img className='nftImage' src={nft?.image} alt='NFT' />
                                        <div className='nftFeatures'>
                                            <div className='diamondValue'>
                                                <img src={DiamondIcon} alt='diamond_icon' />
                                                <span>2596</span>
                                            </div>
                                            <p>#424</p>
                                        </div>
                                        {/* <div className='priceAndAction'>
                                            <div className='currency'>
                                                <img src={SolanaIcon} alt='solana_icon' />
                                                <span className='price'>0.25</span>
                                            </div>
                                            <button>BUY</button>
                                        </div> */}
                                    </div>
                                )
                            }
                            )
                        }
                    </div>


                    {/*  */}
                    {/*  */}
                    {/*  */}
                    {/* 
                    <div className='traitsContainer'>
                        <p className='traitHeader'>ARMOR</p>
                        <div className='traits'>
                            <div className='individualTrait'>
                                <div className='leftSide'>

                                </div>
                                <div className='rightSide'>
                                    <p className='name'>Gold Chain</p>
                                    <p className='value'>20.24</p>
                                    <p className='fade_value'>8/63</p>
                                    <p className='percentage'>3.56%</p>
                                </div>
                            </div>
                            <div className='individualTrait'>
                                <div className='leftSide'>

                                </div>
                                <div className='rightSide'>
                                    <p className='name'>Gold Chain</p>
                                    <p className='value'>20.24</p>
                                    <p className='fade_value'>8/63</p>
                                    <p className='percentage'>3.56%</p>
                                </div>
                            </div>
                            <div className='individualTrait'>
                                <div className='leftSide'>

                                </div>
                                <div className='rightSide'>
                                    <p className='name'>Gold Chain</p>
                                    <p className='value'>20.24</p>
                                    <p className='fade_value'>8/63</p>
                                    <p className='percentage'>3.56%</p>
                                </div>
                            </div>
                            <div className='individualTrait'>
                                <div className='leftSide'>

                                </div>
                                <div className='rightSide'>
                                    <p className='name'>Gold Chain</p>
                                    <p className='value'>20.24</p>
                                    <p className='fade_value'>8/63</p>
                                    <p className='percentage'>3.56%</p>
                                </div>
                            </div>
                            <div className='individualTrait'>
                                <div className='leftSide'>

                                </div>
                                <div className='rightSide'>
                                    <p className='name'>Gold Chain</p>
                                    <p className='value'>20.24</p>
                                    <p className='fade_value'>8/63</p>
                                    <p className='percentage'>3.56%</p>
                                </div>
                            </div>
                            <div className='individualTrait'>
                                <div className='leftSide'>

                                </div>
                                <div className='rightSide'>
                                    <p className='name'>Gold Chain</p>
                                    <p className='value'>20.24</p>
                                    <p className='fade_value'>8/63</p>
                                    <p className='percentage'>3.56%</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
