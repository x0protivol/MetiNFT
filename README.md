## IPFS NFT Minting Website

Metis Deployment

Node Version : >= 14.0


# Configuration 
Update Hardhat config file.
You need to add the private key & the ehterscan API key from the hardhat.config.js


# Command to Run the project
```
yarn install        // installing node modules
npx hardhat compile // Compiling & Generating ABI
yarn build          // Building frontend
yarn start          // Running frontend
```

# Command to Deploy the smart contrat on Metis
```
npx hardhat run scripts/deploy.js --network metis
```

# Deployed smart contracts on Metis Testnet
```
  export const nftmarketaddress = "0xbEB1859D6259025bCAfdb771868a884Cd27Ac4f7"
  export const nftaddress = "0x928bACe156cB1f31fdc96436f6F33a6E5510047E"
```
