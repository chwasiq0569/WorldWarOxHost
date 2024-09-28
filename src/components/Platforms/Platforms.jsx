import React from 'react'
import PlayInBrowser from "../../assets/playinwebbrowser.png"
import WindowsDownload from "../../assets/windowsdownload.png"
import AvailableInAppStore from "../../assets/availableinappstore.png"
import GetItOnGooglePlay from "../../assets/getitongoogleplay.png"
import AvailableInSteam from "../../assets/availableonsteam.png"

export default function Platforms() {
    return (
        <>
            <p className='whitelistsectionhead'>PLATFORMS</p>
            <div className='platformsoutercontainer'>
                <div className='platformscontainer'>
                    <a href="https://www.worldwar0x.io/" target='_blank'><img src={PlayInBrowser} alt="PlayInBrowser" /></a>
                    <a href="https://worldwar0x.io/patchsystem/ww0xLauncher.zip" target='_blank'><img src={WindowsDownload} alt="WindowsDownload" /></a>
                    <a href="https://apps.apple.com/us/app/world-war-0x/id6477559681?platform=iphone" target='_blank'><img src={AvailableInAppStore} alt="AvailableInAppStore" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.CurfluffleGames.WorldWar0x&hl=en&gl=US" target='_blank'><img src={GetItOnGooglePlay} alt="GetItOnGooglePlay" /></a>
                    <a href="https://store.steampowered.com/app/2667500/World_War_Next/?beta=1" target='_blank'><img src={AvailableInSteam} alt="AvailableInSteam" /></a>
                </div>
                <div className='platformscontainersites'>
                    <p>WORLDWAR0X.IO</p>
                    <p>WORLD WAR NEXT</p>
                </div>
            </div>
        </>
    )
}
