// Hardhat Configuration
// Learn more here: https://hardhat.org/config/
import dotenv from "dotenv";

// Load .env file
dotenv.config();

const ALCHEMY_URL = process.env.ALCHEMY_URL;

export default {
    networks: {
        hardhat: {
            chainId: 1,
            forking: {
                url: ALCHEMY_URL,
            },
        },
    },
    solidity: {
        version: "0.8.7",
    },
};
