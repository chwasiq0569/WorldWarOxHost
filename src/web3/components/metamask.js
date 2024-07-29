// src/metamask.js

import { initializeConnector } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const [metaMask, metaMaskHooks] = initializeConnector((actions) => new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42], // Add the chain IDs you want to support
}));

export { metaMask, metaMaskHooks };
