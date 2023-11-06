require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  etherscan:{
    apiKey: process.env.APIKEY
  },
  networks:{
    hardhat:{},
    sepolia:{
      url: process.env.SEPOLIA_ALCHEMY_PRC_URL,
      accounts: [
        process.env.PRIVATEKEY
      ]
    }
  }
};
