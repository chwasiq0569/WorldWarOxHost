import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Download from "./pages/Download/Download";
import MintNFT from "./pages/MintNFT/MintNFT";
import TestMintNFTs from "./pages/MintNFT/TestMintNFTs";
import Support from "./pages/Support/Support";
import WhiteListPage from "./pages/WhiteListPage/WhiteListPage";
import TellerATM from "./components/Game&Web3/TellerATM/components/TellerATM";
import {Buffer} from 'buffer';
import process from 'process';
import Login from "./components/Game&Web3/Login/Login";
import Test from "./components/Game&Web3/Test/Test";
import WithdrawDone from "./components/Game&Web3/WithdrawScreens/WithdrawDone";
import WithdrawProcessing from "./components/Game&Web3/WithdrawScreens/WithdrawProcessing";
import CustomAmount from "./components/Game&Web3/WithdrawScreens/CustomAmount";
import WithdrawAmount from "./components/Game&Web3/WithdrawScreens/WithdrawAmount";
import ChooseToken from "./components/Game&Web3/WithdrawScreens/ChooseToken";


window.Buffer = Buffer;
window.process = process;


function App() {
    return (<Router>
        <AppContent/>
    </Router>);
}

function AppContent() {
    const location = useLocation();
    const [withdrawToken, setWithdrawToken] = React.useState({})

    useEffect(() => {
        document.body.style.backgroundColor = getBackgroundColor(location.pathname);
    }, [location.pathname]);

    return (<div className="App">
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/privacy" element={<Privacy/>}/>
            <Route exact path="/terms" element={<Terms/>}/>
            <Route exact path="/download" element={<Download/>}/>
            <Route exact path="/mintnfts" element={<MintNFT/>}/>
            <Route exact path="/testmintnfts" element={<TestMintNFTs/>}/>
            <Route exact path="/support" element={<Support/>}/>
            <Route exact path="/mint" element={<WhiteListPage/>}/>
            <Route exact path="/atm" element={<TellerATM/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/choosetoken"
                   element={<ChooseToken withdrawToken={withdrawToken} setWithdrawToken={setWithdrawToken}/>}/>
            <Route exact path="/withdrawamount"
                   element={<WithdrawAmount withdrawToken={withdrawToken} setWithdrawToken={setWithdrawToken}/>}/>
            <Route exact path="/customamount" element={<CustomAmount token={withdrawToken}/>}/>
            <Route exact path="/withdrawprocessing" element={<WithdrawProcessing/>}/>
            <Route exact path="/withdrawdone" element={<WithdrawDone/>}/>
            <Route exact path="/test" element={<Test/>}/>
        </Routes>
    </div>);
}

function getBackgroundColor(pathname) {
    switch (pathname) {
        case '/atm':
        case '/choosetoken':
        case '/withdrawamount':
        case '/customamount':
        case '/withdrawdone':
        case '/withdrawprocessing':
            return '#217a69'; // Color for TellerATM
        case '/withdraw':
        case '/deposit':
            return 'black';
        default:
            return 'black'; // Default color
    }
}

export default App;
