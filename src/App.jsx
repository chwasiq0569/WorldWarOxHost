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
import TellerATM from "./components/TellerATM/components/TellerATM";
import { Buffer } from 'buffer';
import process from 'process';
import ChooseToken from './pages/WithdrawScreens/ChooseToken';
import WithdrawAmount from './pages/WithdrawScreens/WithdrawAmount';
import CustomAmount from './pages/WithdrawScreens/CustomAmount';
import WithdrawProcessing from './pages/WithdrawScreens/WithdrawProcessing';
import WithdrawDone from './pages/WithdrawScreens/WithdrawDone';
import './style.css'
import './swiper-bundle.min.css'
import './shortcodes.css'
import './responsive.css'
import './bootstrap.css'
import './animation.css'
import './animate.min.css'
import ViewNFT from './pages/ViewNFT/ViewNFT';


window.Buffer = Buffer;
window.process = process;

function App() {
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
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route exact path="/download" element={<Download />} />
            <Route exact path="/mintnfts" element={<MintNFT />} />
            <Route exact path="/testmintnfts" element={<TestMintNFTs />} />
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/mint" element={<WhiteListPage />} />
            <Route exact path="/atm" element={<TellerATM />} />
            <Route exact path="/choosetoken" element={<ChooseToken withdrawToken={withdrawToken} setWithdrawToken={setWithdrawToken} />} />
            <Route exact path="/withdrawamount" element={<WithdrawAmount withdrawToken={withdrawToken} />} />
            <Route exact path="/customamount" element={<CustomAmount />} />
            <Route exact path="/withdrawprocessing" element={<WithdrawProcessing />} />
            <Route exact path="/withdrawdone" element={<WithdrawDone />} />
        </Routes>
    </div>);
}

function getBackgroundColor(pathname) {
    switch (pathname) {
        case '/atm':
            return '#217a69'; // Color for TellerATM
        default:
            return 'black'; // Default color
    }
}

export default App;
