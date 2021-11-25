## How to run

1. Update ganache accounts private key in hardhat.config.js \
   Or you can register your network in hardhat.config.js \
   **: If you are using your own network, you should update rpcEndpoint in pages\index.js line 19.
   ```
   let rpcEndpoint = "http://127.0.0.1:7545";
   ```

2. run 
``` 
npm install 
npx hardhat run --network your_network_name .\scripts\deploy.js
npm run build
npm start
```

![Video_21-11-25_12-14-12](https://user-images.githubusercontent.com/37606416/143383889-71c62b8c-a6c7-4662-9fa2-45498dac0b9a.gif)
