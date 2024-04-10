import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Download from "./pages/Download/Download";
import MintNFT from "./pages/MintNFT/MintNFT";
import TestMintNFTs from "./pages/MintNFT/TestMintNFTs";
import Support from "./pages/Support/Support";
import WhiteListPage from "./pages/WhiteListPage/WhiteListPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/mintnfts" element={<MintNFT />} />
          <Route exact path="/testmintnfts" element={<TestMintNFTs />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/mint" element={<WhiteListPage />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}

    </div>
  );
}

export default App;
