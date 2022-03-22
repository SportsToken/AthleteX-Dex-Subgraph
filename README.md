# [AthleteX-Dex-Subgraph](https://thegraph.com/hosted-service/subgraph/nyamwaya/athlete-x-dex-mumbai)
AX DEX Mumbai is a subgraph of a uniswap v2 dex

DO THIS FIRST: `yarn install`

### Deploy Instructions

```graph auth --product hosted-service <ACCESS_TOKEN>```

```graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH NAME>```

DOCS: 
subgraph.yaml - describes the data sources your subgraph will index
schema.graphql - These entities indicate what data is stored for this subgraph and how to query it.

