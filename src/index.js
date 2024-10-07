// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Web3ReactProvider} from '@web3-react/core';
import App from './App';
import {Web3Provider} from '@ethersproject/providers';
import {metaMask, metaMaskHooks} from './web3/components/metamask';
import dotenv from  'dotenv'

function getLibrary(provider) {
    return new Web3Provider(provider);
}

const connectors = [[metaMask, metaMaskHooks]];

ReactDOM.render(<Web3ReactProvider getLibrary={getLibrary} connectors={connectors}>
    <App/>
</Web3ReactProvider>, document.getElementById('root'));
