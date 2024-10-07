import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Download from "./pages/Download/Download";
import MintNFT from "./pages/MintNFT/MintNFT";
import TestMintNFTs from "./pages/MintNFT/TestMintNFTs";
import Support from "./pages/Support/Support";
import WhiteListPage from "./pages/WhiteListPage/WhiteListPage";
import TellerATM from "./components/Game&Web3/TellerATM/components/TellerATM";
import Login from "./components/Game&Web3/Login/Login";
import ChooseToken from './components/Game&Web3/WithdrawScreens/ChooseToken';
import WithdrawAmount from './components/Game&Web3/WithdrawScreens/WithdrawAmount';
import CustomAmount from './components/Game&Web3/WithdrawScreens/CustomAmount';
import WithdrawProcessing from './components/Game&Web3/WithdrawScreens/WithdrawProcessing';
import WithdrawDone from './components/Game&Web3/WithdrawScreens/WithdrawDone';
import ViewNFT from './pages/ViewNFT/ViewNFT';
import Collection from './pages/Collection/Collection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactGA from 'react-ga';
import { Buffer } from 'buffer';
import process from 'process';

window.Buffer = Buffer;
window.process = process;

const TRACKING_ID = ReactGA.initialize('AW-11124789446');
ReactGA.initialize(TRACKING_ID)

function App() {

    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (<Router>
        <AppContent />
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
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/download" element={<Download />} />
            <Route exact path="/mintnfts" element={<MintNFT />} />
            <Route exact path="/testmintnfts" element={<TestMintNFTs />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/collection" element={<Collection />} />
            <Route exact path="/mint" element={<WhiteListPage />} />
            <Route exact path="/atm" element={<TellerATM />} />
            <Route exact path="/choosetoken" element={<ChooseToken withdrawToken={withdrawToken} setWithdrawToken={setWithdrawToken} />} />
            <Route exact path="/withdrawamount" element={<WithdrawAmount withdrawToken={withdrawToken} />} />
            <Route exact path="/customamount" element={<CustomAmount />} />
            <Route exact path="/withdrawprocessing" element={<WithdrawProcessing />} />
            <Route exact path="/withdrawdone" element={<WithdrawDone />} />
            <Route exact path="/viewnft" element={<ViewNFT />} />
            <Route exact path="/collection" element={<Collection />} />
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
