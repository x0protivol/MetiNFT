## IPFS NFT Minting Website

Metis Deployment

Node Version : >= 14.0

# Command to Run frontend
```
yarn install
```

After installed `yarn`, you need to create `config.js` file in the main project directory.
Open `config.js` file, you should copy and paste the code below:
```
  export const nftmarketaddress = "0xbEB1859D6259025bCAfdb771868a884Cd27Ac4f7"
  export const nftaddress = "0x928bACe156cB1f31fdc96436f6F33a6E5510047E"
```
Save the file.
After that using this command to compile smart contract:
```
npx hardhat compile
```
If compile successful, check if `artifacts` folder exists.
If exists then run below commands:
```
yarn build
```
To start the project on local environment:
```
yarn start
```
The server will run on `http://localhost:3000/`



# Deployed smart contracts on Metis Testnet
```
  export const nftmarketaddress = "0xbEB1859D6259025bCAfdb771868a884Cd27Ac4f7"
  export const nftaddress = "0x928bACe156cB1f31fdc96436f6F33a6E5510047E"
```
