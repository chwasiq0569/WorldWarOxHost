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
import TellerATM from "./components/TellerATM/components/TellerATM";
import {Buffer} from 'buffer';
import process from 'process';
import Login from "./components/Game/Login/Login";
import Deposit from "./components/Transaction/Deposit/Deposit";
import Withdraw from "./components/Transaction/Withdraw/Withdraw";
import {Get, Delete} from "./components/Game/Function/Database";


window.Buffer = Buffer;
window.process = process;

const INACTIVITY_TIME_LIMIT = 5 * 60 * 1000; // 5 minutes in milliseconds


function App() {
    return (<Router>
        <AppContent/>
    </Router>);
}

function AppContent() {
    const location = useLocation();
   /* const [user, setUser] = useState(Get());

    let inactivityTimer;*/

    useEffect(() => {
        // Set the initial background color
        document.body.style.backgroundColor = getBackgroundColor(location.pathname);

     /*   // Set up event listeners for inactivity and tab close
        window.addEventListener('beforeunload', handleLogout);
        resetInactivityTimer();

        return () => {
            window.removeEventListener('beforeunload', handleLogout);
            clearTimeout(inactivityTimer);
        };*/
    }, [location.pathname]);

    /*    const resetInactivityTimer = () => {
          clearTimeout(inactivityTimer);
          inactivityTimer = setTimeout(handleRefreshLogout, INACTIVITY_TIME_LIMIT);
      };

    const handleLogout = () => {
          if (Get() != null) {
              Delete(); // Clear user data from sessionStorage
              window.location.reload();// Set user to null to trigger re-render
          }
      };

      const handleRefreshLogout = () => {
          if (Get() != null) {
              Delete(); // Clear user data from sessionStorage
              setUser(null);// Set user to null to trigger re-render
          }
      };

      useEffect(() => {
          // Reset inactivity timer on user activity
          window.addEventListener('mousemove', resetInactivityTimer);
          window.addEventListener('keypress', resetInactivityTimer);

          return () => {
              window.removeEventListener('mousemove', resetInactivityTimer);
              window.removeEventListener('keypress', resetInactivityTimer);
          };
      }, [location.pathname]);*/

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
            <Route exact path="/withdraw" element={<Withdraw/>}/>
            <Route exact path="/deposit" element={<Deposit/>}/>
        </Routes>
    </div>);
}

function getBackgroundColor(pathname) {
    switch (pathname) {
        case '/atm':
        case '/login':
            return '#217a69'; // Color for TellerATM
        case '/withdraw':
        case '/deposit':
            return 'black';
        default:
            return 'black'; // Default color
    }
}

export default App;
