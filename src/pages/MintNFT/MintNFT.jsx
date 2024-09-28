import React from 'react'
import "./MintNFT.css"
import NFTCover from "../../assets/nfts.svg"
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/Navbar';
import NFTProfilePic from "../../assets/Nftprofile.png"
import NftDetailsPic from "../../assets/nftdetailspic.png"

import NFT1 from "../../assets/nft1.png"
import NFT2 from "../../assets/nft2.png"
import NFT3 from "../../assets/nft3.png"
import NFT4 from "../../assets/nft4.png"
import NFT5 from "../../assets/nft5.png"
import Header from '../../components/Header/Header';

function MintNFT() {
    const [wallerConnected, setWalletConnected] = React.useState(false)
    const [showMyNFTs, setShowMyNFTs] = React.useState(false)
    const [moveToBack, setMoveToBack] = React.useState(false);
    const [count, setCount] = React.useState(0)

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }
    React.useEffect(() => {
        scrollToTop()
    }, [])
    return (<div style={{ position: 'relative', overflowX: 'hidden' }}>
        {/* <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} /> */}
        <Header />

        <div className='mintnfts_container'>
            <div className='screen_cover'>
                <img className="nft_cover_image" src={NFTCover} alt="nft_cover" />
                <img className="nftprofile_pic" src={NFTProfilePic} alt="nft_profile" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {
                showMyNFTs ? <div className="myNfts">
                    <p className="basic_text">ADDRESS: 0x34t3...49f3</p>
                    <div className="nfts_container">
                        <div className="nft_container">
                            <img src={NFT1} alt="nft1" />
                        </div>
                        <div className="nft_container">
                            <img src={NFT2} alt="nft2" />
                        </div>
                        <div className="nft_container">
                            <img src={NFT3} alt="nft3" />
                        </div>
                        <div className="nft_container">
                            <img src={NFT4} alt="nft4" />
                        </div>
                        <div className="nft_container">
                            <img src={NFT5} alt="nft5" />
                        </div>
                    </div>
                </div> : <><p className="main_head">World War 0x Soldier Collection</p>
                    <p className="primarytext">2000 NFTs minted on the Polygon Blockchain.</p>
                    <div className="nft_details">
                        <div className="left">
                            <img src={NftDetailsPic} alt="nft_details" />
                        </div>
                        <div className="right">
                            <p>Price: <strong>0.025</strong></p>
                            <p>Claimed: <strong>8 / 100</strong></p>
                        </div>
                    </div>
                    <p className="basic_text">Connect Wallet to claim</p>
                    {
                        wallerConnected ? <div className="counter_and_btn">
                            <div className="counter">
                                <span onClick={() => count > 0 && setCount(count - 1)} className="btns">-</span>
                                <span>{count}</span>
                                <span onClick={() => setCount(count + 1)} className="btns">+</span>
                            </div>
                            <button className="connect_waller_btn" onClick={() => setShowMyNFTs(true)}>CLAIM NFT</button>
                        </div> : <button onClick={() => setWalletConnected(true)} className="connect_waller_btn">CONNECT WALLET</button>
                    }

                </>
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <Footer />
    </div>
    )
}

export default MintNFT