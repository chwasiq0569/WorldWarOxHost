import React from 'react'
import BattlewearIcon from "../../assets/collection-icons/battlewear.png"
import CountryIcon from "../../assets/collection-icons/country.png"
import oldIcon from "../../assets/collection-icons/old.png"
import WomenIcon from "../../assets/collection-icons/women.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive'
import CollectionICON from "../../assets/collectioni-icon.png"
import './Collection.css'
import Header from '../../components/Header/Header'

export default function Collection() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isSmallScreen = useMediaQuery({ query: '(max-width: 760px)' })

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
        },
        {
            id: 2,
            img: oldIcon,
            text: "GOLDHEADS",
            selected: false
        },
        {
            id: 3,
            img: WomenIcon,
            text: "women",
            selected: false
        },
        {
            id: 4,
            img: BattlewearIcon,
            text: "battlewear",
            selected: false
        },
        {
            id: 5,
            img: CountryIcon,
            text: "country",
            selected: false
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
        slidesToShow: isSmallScreen ? 1 : isTabletOrMobile ? 3 : 4,
        slidesToScroll: 1,
    };
    return (
        <div className='collectionContainer'>
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
                                <p className="price">2.00</p>
                                <p className="action-text">BUY NOW</p>
                            </div>
                            <div>
                                <p className="price">1.50</p>
                                <p className="action-text">SELL NOW</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p className="value">350/4,418 (7.83%)</p>
                            <p className="label">LISTED/SUPPLY</p>
                        </div>
                        <div>
                            <p className="value">32</p>
                            <p className="label">VOLUME (24H)</p>
                        </div>
                        <div>
                            <p className="value">163,942</p>
                            <p className="label">VOLUME (ALL)</p>
                        </div>
                        <div>
                            <p className="value">6</p>
                            <p className="label">SALES (24H)</p>
                        </div>
                        <div>
                            <p className="value">-19.25%</p>
                            <p className="label">PRICE Δ (24H)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
