import React from 'react'
import "./NFTHolder.css"
import ReactPlayer from 'react-player'
import NFTHolder1 from "../../assets/nftholder1.png"
import NFTHolder2 from "../../assets/nftholder2.png"
import NFTHolder3 from "../../assets/nftholder3.png"

export default function NFTHolder({ headtext, lefttext }) {
    return (
        <div className='nftholderoutercontainer' style={{ marginTop: headtext && "7.5rem" }}>
            {
                headtext && <div className='pagehead'>
                    <p>{headtext}</p>
                </div>
            }
            <div className='nftholderssection'>
                <div className='leftside'>
                    <p>{lefttext}</p>
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
            </div>
        </div>
    )
}
