import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337, 31337] });

export const GREET_ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const ERC20_ADDR = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export const BLOCK_CONFIRMATION_THRESHOLD = 1;