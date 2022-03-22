# AthleteX-Dex-Subgraph - https://thegraph.com/hosted-service/subgraph/nyamwaya/athlete-x-dex-mumbai
AX DEX Mumbai is a subgraph of a uniswap v2 dex


NOTE: you will need to update the location of `athletexfactory.abi.json` & `athetexrouter.abi.json` to the ones in your local repository. Untill furthur notice use the following file structure

--> subgraph folder
----> abis folder
-------> `athetexrouter.abi.json`
-------> `athletexfactory.abi.json`
----> AthleteX-Dex-Subgraph <--- this repository

### Deploy 

Step 1: ```graph auth --product hosted-service <ACCESS_TOKEN>```

Step 2 ```graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>```
