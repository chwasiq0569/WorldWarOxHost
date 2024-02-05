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

function TestMintNFTs() {
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
    return (<>
        <Navbar moveToBack={moveToBack} setMoveToBack={setMoveToBack} />
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
            <iframe style={{ margin: "0 auto" }}
                src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x900017cE23741B07C9ff797F4f21097a1f2d9Ace&chain=%7B%22name%22%3A%22Mumbai%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fmumbai.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22maticmum%22%2C%22chainId%22%3A80001%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22mumbai%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=98f2cfb1ba0a4a3a6957bb9311121398&theme=dark&primaryColor=red"
                width="600px"
                height="600px"
                frameborder="0">

            </iframe>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        <Footer />
    </>
    )
}

export default TestMintNFTs