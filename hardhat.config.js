require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs');
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "ganache",
  networks: {
    hardhat: {
      chainId: 1337
    },
    ganache: {
      url: `http://127.0.0.1:7545`,
      accounts: ['5fa3ea29b86bf49e827c0a4232a21bfaca2f9118ba9036eab001c30aeabedb00'],
    },
    // metis: {
    //   url: "https://stardust.metis.io/?owner=588",
    //   accounts: [""],
    // },
    // mumbai: {
    //   url: "https://matic-mumbai.chainstacklabs.com/",
    //   accounts: [""]
    // },
  },
  etherscan: {
    apiKey: "",
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

