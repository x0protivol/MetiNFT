require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs');
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    metis: {
      url: "https://stardust.metis.io/?owner=588",
      accounts: [""],
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com/",
      accounts: [""]
    },
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

