import React from 'react'
import NFT from "../../assets/collection/1.png"
import SolanaIcon from "../../assets/solana.svg"
import TellerIcon from "../../assets/teller.svg"
import "./ViewNFT.css"

export default function ViewNFT() {
    return (
        <div className='viewnftContanier'>
            <div className="nftHeader">
                <div className='nftName'>
                    <p>World War 0x #192</p>
                    <div className="badge"><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.46328 0.811279L0 3.19857C2.1667 6.69856 4.3334 10.1986 6.5001 13.6985L13 3.19857L10.5369 0.811279H2.46328Z" fill="black" />
                    </svg>
                        <span>4124</span>
                    </div>
                </div>
                <div className='nftDetails'>
                    <img src={NFT} alt='nft_img' />
                    <span>Country</span>
                    <span>22.94</span>
                    <span>17.86</span>
                </div>
            </div>

            <div className='viewNFTSection'>
                <div className='leftSide'>
                    <img src={NFT} alt='nft_img' />
                </div>
                <div className='rightSide'>
                    <div className='itemDetails'>
                        <p className='listedFor'>LISTED FOR</p>
                        <div className='price'>
                            <img src={SolanaIcon} alt='nft_img' />
                            <span className='itemPrice'>0.19</span>
                            <span>($24.24)</span>
                        </div>
                        <div className='buyOptions'>
                            <button>BUY NOW</button>
                            <div className='tellerOption'>
                                <img src={TellerIcon} alt='nft_img' />
                                <span>BUY WITH TELLER</span>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <br />
                    <br />
                    <br />

                    <div className='otherOptions'>
                        <div className='row'>
                            <div className='col'>
                                <p>Current Top Offer</p>
                            </div>
                            <div className='col'>
                                <div className=''>
                                    <img src={SolanaIcon} alt='nft_img' />
                                    <span>1.14</span>
                                </div>
                            </div>
                        </div>
                        <p className='head'>DETAILS</p>
                        <div className='row'>
                            <div className='col'>
                                <p>Mint</p>
                            </div>
                            <div className='col'>
                                <p>5w4gd</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>Mint</p>
                            </div>
                            <div className='col'>
                                <p>4rge3a</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <p>Metadata</p>
                            </div>
                            <div className='col'>
                                <p className='timeStamp'>8/5/2024, 11:53:30 PM</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <br />
                    <br />
                    <br />
                    <div className='attributesContainer'>
                        <p className='head'>ATTRIBUTES (10)</p>
                        <br />

                        <div className='attributes'>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                            <div className='individualAttribute'>
                                <p>background</p>
                                <p>Deep Ocean Blue</p>
                                <div className='row'><p className='percentage'>12.65%</p><div className='price'>
                                    <img src={SolanaIcon} alt="solana_icon" /><span>21.24</span>
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
